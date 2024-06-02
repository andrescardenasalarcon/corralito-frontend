import { Subscription, finalize, map } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';
import { Producto } from 'src/app/modelos/Producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit, OnDestroy {
  public _id: string | any;
  public tmp: any;
  public cargaFinalizada: boolean;
  public arregloProducto: Producto[];
  public productoSeleccionado: Producto;

  public subscription: Subscription;

  constructor(private router: Router, private productoService: ProductoService, private actRoute: ActivatedRoute) {
    this.cargaFinalizada = false;
    this.arregloProducto = [];
    this.productoSeleccionado = new Producto("", "", "", 0, "", "", "");

    this.subscription = this.tmp;
    this._id = String(actRoute.snapshot.paramMap.get('codProducto'));

  }
  ngOnInit(): void {
    this.obtenerProductoBack(this._id);
    // this.actRoute.paramMap.subscribe((params) => {
    //   this._id = String(params.get('codProducto'));
    //   if (this._id) {
    //     this.productoService.buscarUnProducto(this._id).subscribe(
    //       (res) => {
    //         this.arregloProducto.push(res);
    //         this.cargaFinalizada = true;
    //       },
    //       (err) => {
    //         console.error(err);
    //       }
    //     )
    //   }

    // })
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
        this.arregloProducto.push(respuesta);
      }),
      finalize(() => {
        this.cargaFinalizada = true;
      })
    ).subscribe(observadoresAny);

  }

  public volver(): void {
    this.router.navigate(['/private/product/manageproduct'])
  }
  public editProduct(): void {
    this.router.navigate(['/private/product/editproduct', this._id])
  }
  public editFoto(): void {
    this.router.navigate(['/private/product/editproductfoto', this._id])
  }

  
}
