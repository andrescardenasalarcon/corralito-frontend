import { Subscription, finalize, map } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';
import { Producto } from 'src/app/modelos/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit, OnDestroy {

  public tmp: any;
  public cargaFinalizada: boolean;
  public arregloProductos: Producto[];
  public subscription: Subscription;

  constructor(private productoService: ProductoService) {
    this.cargaFinalizada = false;
    this.arregloProductos = [];
    this.subscription = this.tmp;

  }

  ngOnInit(): void {
    this.obtenerProductosBack();

  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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

}
