import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, finalize, map } from 'rxjs';
import { Ciudad } from 'src/app/modelos/Ciudad';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit, OnDestroy{

  public tmp: any;
  public cargaFinalizada: boolean;
  public arregloCiudades: Ciudad[];
  public subscription: Subscription;
  
  constructor(private ciudadService: CiudadService){
    this.arregloCiudades = [];
    this.cargaFinalizada = false;
    this.subscription = this.tmp;

  }

  ngOnInit(): void {
    this.obtenerCiudadesBack();
    
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  public obtenerCiudadesBack(): void {
    this.subscription = this.ciudadService
      .obtenerCiudadades()
      .pipe(
      map((respuesta:any)=>{
        console.log(respuesta);
        this.arregloCiudades = respuesta;
      }),
      finalize(()=>{
        this.cargaFinalizada = true;
      })
    ).subscribe(observadoresAny);
  }
}
