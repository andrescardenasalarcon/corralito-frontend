import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit, OnDestroy {

  private tmp: any;
  public objProduct: Producto;
  public miSuscripcion: Subscription;

  //*******Variables para la ventana flotante del borrar***********//
  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo:string;
  public modalContenido: string;
  public tmpBase64: any;

  constructor(private router: Router, public productoService: ProductoService, public toastr: ToastrService, public miModal: BsModalService) {
    this.objProduct = new Producto("", "", "", 0, "", "", "");
    this.miSuscripcion = this.tmp;
    this.tmpBase64 = null;

    this.modalTitulo = "";
    this.modalCuerpo = "";
    this.modalContenido = "";
    this.modalRef = this.tmpBase64
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe()
    }
  }

  public creacion(formulario: NgForm): void {

    const miIdProducto = this.objProduct.codProducto;
    const miNombreProducto = this.objProduct.nombreProducto;
    const miDetalleProducto = this.objProduct.detalleProducto;
    const miValorProducto = this.objProduct.valorProducto;
    const miPublicoFotoProducto = this.objProduct.publicoFotoProducto;
    const miPrivadoFotoProducto = this.objProduct.privadoFotoProducto;
    const miBase64Producto = this.objProduct.base64Producto;
    const newProduct = new Producto(miIdProducto, miNombreProducto, miDetalleProducto, miValorProducto, miPublicoFotoProducto, miPrivadoFotoProducto, miBase64Producto);

    this.miSuscripcion = this.productoService.crearProductos(newProduct).pipe(
      map((respuesta: any) => {
        mostrarMensaje('success', 'Nuevo Producto Creado!', 'Correcto', this.toastr);
        this.router.navigate(['/private/product/manageproduct']);
        formulario.reset();
      }),
      catchError((err) => {
        mostrarMensaje('error', 'Falló la creación del producto', 'Error', this.toastr);
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
      this.objProduct.base64Producto = this.tmpBase64;
      this.objProduct.publicoFotoProducto = caja.target.files[0].name;
    };
  }

  public volver(): void {
    this.router.navigate(['/private/product/manageproduct'])
  }


}
