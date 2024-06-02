import { RestauranteService } from './../../../servicios/restaurante.service';
import { Subscription, finalize, map } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/modelos/Restaurante';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit, OnDestroy {

  public tmp: any;
  public cargaFinalizada: boolean;
  public arregloRestaurantes: Restaurante[];
  public subscription: Subscription;

  constructor(private restauranteService: RestauranteService){
    this.arregloRestaurantes = [];
    this.cargaFinalizada = false;
    this.subscription = this.tmp;
  }

  ngOnInit(): void {
    this.obtenerRestaurantesBack();
    
  }
  ngOnDestroy(): void {
    if(this.subscription){
        this.subscription.unsubscribe();
    }
  }
  public obtenerRestaurantesBack(): void {
    this.subscription = this.restauranteService
    .obtenerRestaurantes()
    .pipe(
      map((respuesta:any)=>{
        console.log(respuesta);
        this.arregloRestaurantes = respuesta;
      }),
      finalize(()=>{
        this.cargaFinalizada = true;
      })
    ).subscribe(observadoresAny);
  }
}

