import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, finalize, map } from 'rxjs';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';

@Component({
  selector: 'app-producto-edit-photo',
  templateUrl: './producto-edit-photo.component.html',
  styleUrls: ['./producto-edit-photo.component.css']
})
export class ProductoEditPhotoComponent implements OnInit, OnDestroy{
  public _id: string | any;
  public arregloProducto: Producto[];
  public productoSeleccionado: Producto;
  public cargaFinalizada: boolean;
  public subscription: Subscription;
  public tmpBase64: any;
  public tmpFoto: string;
  public tmp: any;

  constructor(
    private router: Router,
    private productoService: ProductoService, 
    private actRoute: ActivatedRoute, 
    public miMensaje: ToastrService, 
    public miModal: BsModalService
  ){
    this.arregloProducto = [];
    this.cargaFinalizada = false;
    this.productoSeleccionado = new Producto("", "", "", 0, "", "", "");
    this.tmpBase64 = null;
    this.tmpFoto = "";
    this.subscription = this.tmp;
    this._id = String(actRoute.snapshot.paramMap.get('codProducto'));
  }

  ngOnInit(): void {
    this.obtenerProductoBack(this._id);
    //#region 
    //this.actRoute.paramMap.subscribe((params) => {
    //   this._id = String(params.get('codProducto'));
    //   if (this._id) {
    //     this.productoService.buscarUnProducto(this._id).subscribe(
    //       (res) => {
    //         this.cargaFinalizada = true;
    //         this.productoSeleccionado = res;
    //         this.tmpFoto = res.base64Producto;

    //       },
    //       (err) => {
    //         console.error(err);
    //       }
    //     )
    //   }
    // })
    //#endregion
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public obtenerProductoBack(codProduct:any): void {
    this.subscription = this.productoService
    .buscarUnProducto(codProduct)
    .pipe(
      map((respuesta: any) => {
        console.log(respuesta);
        this.productoSeleccionado = respuesta;
        this.tmpFoto = respuesta.base64Producto;
      }),
      finalize(() => {
        this.cargaFinalizada = true;
      })
    ).subscribe(observadoresAny);

  }

  public updateFoto(formulario: NgForm): void {

    const miIdProducto = this.productoSeleccionado.codProducto;
    const miNombreProducto = this.productoSeleccionado.nombreProducto;
    const miDetalleProducto = this.productoSeleccionado.detalleProducto;
    const miValorProducto = this.productoSeleccionado.valorProducto;
    const miPublicoFotoProducto = this.productoSeleccionado.publicoFotoProducto;
    const miPrivadoFotoProducto = this.productoSeleccionado.privadoFotoProducto;
    const miBase64Producto = this.productoSeleccionado.base64Producto;
    const updateProduct = new Producto(miIdProducto, miNombreProducto, miDetalleProducto, miValorProducto, miPublicoFotoProducto, miPrivadoFotoProducto, miBase64Producto);

    this.subscription = this.productoService.actualizarFoto(updateProduct).pipe(
      map((respuesta: any) => {
        mostrarMensaje("info", "Listo, quedó actualizado", "Update", this.miMensaje);
        this.router.navigate(['/private/product/manageproduct']);
        formulario.reset();
      }),
      catchError((err) => {
        mostrarMensaje('error', 'Falló la actualización del producto', 'Error', this.miMensaje);
        formulario.reset();
        throw err;
      })
    ).subscribe(observadoresAny);

  }

  public seleccionarFoto(caja: any): void {
    if (!caja.target.files[0] || caja.target.files[0].length === 0) {
      return;
    }
    const tipo = caja.target.files[0].type;
    if (tipo.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(caja.target.files[0]);
    reader.onload = () => {
      this.tmpBase64 = reader.result;
      this.productoSeleccionado.base64Producto = this.tmpBase64;
      this.productoSeleccionado.publicoFotoProducto = caja.target.files[0].name;
    };
  }

}
