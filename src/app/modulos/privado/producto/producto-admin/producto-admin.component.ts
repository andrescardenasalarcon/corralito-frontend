import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Subscription, finalize, map } from 'rxjs';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';

@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto-admin.component.html',
  styleUrls: ['./producto-admin.component.css']
})
export class ProductoAdminComponent implements OnInit, OnDestroy {

  public tmp: any;
  public cargaFinalizada: boolean;
  public arregloProductos: Producto[];
  public productoSeleccionado: Producto;
  public subscription: Subscription;

  //*******Variables para la ventana flotante del borrar***********//
  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;
  public modalContenidoImg: string;

  public tmpBase64: any;

  constructor(private productoService: ProductoService, public toastr: ToastrService, public miModal: BsModalService) {
    this.cargaFinalizada = false;
    this.arregloProductos = [];
    this.productoSeleccionado = new Producto("", "", "", 0, "", "", "");
    this.subscription = this.tmp;

    this.modalTitulo = "";
    this.modalCuerpo = "";
    this.modalContenido = "";
    this.modalContenidoImg = "";
    this.modalRef = this.tmpBase64

  }

  ngOnInit(): void {
    
    this.obtenerProductosBack();

  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public seleccionarProducto(objProduct: Producto): void {
    this.productoSeleccionado = objProduct;
  }
  public obtenerProductosBack(): void {
    this.subscription = this.productoService
      .obtenerProductos()
      
      .pipe(
        map((respuesta: any) => {
          console.log(respuesta);
          this.arregloProductos = respuesta;
        }),
        finalize(() => {
          this.cargaFinalizada = true;
        })
      ).subscribe(observadoresAny);
  }


  public borrarProducto(objBorrar: string): void {
    this.productoService.borrarPorducto(objBorrar).subscribe(() => {
      this.arregloProductos = this.arregloProductos.filter(
        (p)=>p.codProducto !== objBorrar
      )
      mostrarMensaje("success", "Eliminado con exito", "Computador " + this.productoSeleccionado.nombreProducto, this.toastr)
    })
  }
  //Codigo para hacer lo de las modales del borrar
  //***************************************** */
  public btnCancelar(): void {
    this.modalRef.hide();
  }

  public btnEliminar(): void {
    this.borrarProducto(this.productoSeleccionado.codProducto);
    this.btnCancelar();
  }

  public abrirModal(plantilla: TemplateRef<any>, obj: Producto): void {
    this.productoSeleccionado = obj;
    this.modalRef = this.miModal.show(plantilla, { class: "modal-md" });
    this.modalTitulo = "Advertencia";
    this.modalCuerpo = "¿Borrar Producto?"
    this.modalContenido = obj.nombreProducto + " - " + obj.detalleProducto;
    this.modalContenidoImg = obj.base64Producto;
  }



}
