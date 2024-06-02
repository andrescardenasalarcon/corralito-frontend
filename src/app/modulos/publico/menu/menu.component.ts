import { CiudadService } from 'src/app/servicios/ciudad.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, forkJoin, map, Subscription } from 'rxjs';
import { Ciudad } from 'src/app/modelos/Ciudad';
import { Restaurante } from 'src/app/modelos/Restaurante';
import { RestauranteService } from 'src/app/servicios/restaurante.service';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  public cargaFinalizada: boolean = false;
  public arregloRestaurantes: Restaurante[] = [];
  public arregloCiudades: Ciudad[] = [];
  public arregloCiudadesAgrupadas: Ciudad[] = [];
  public subscription: Subscription = new Subscription();

  constructor(public misRutas: Router, private restauranteService: RestauranteService, private ciudadService: CiudadService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public menuDetalle(city: Ciudad): void {
    console.log(city);
    
    this.misRutas.navigate(['/land/menu/detail', city._id]);
  }

  private cargarDatos(): void {
    const restaurantes = this.restauranteService.obtenerRestaurantes();
    const ciudades = this.ciudadService.obtenerCiudadades();

    forkJoin({ restaurantes, ciudades })
      .pipe(
        finalize(() => {
          this.cargaFinalizada = true;
        })
      )
      .subscribe(({ restaurantes, ciudades }) => {
        this.arregloRestaurantes = restaurantes;
        this.arregloCiudades = ciudades;
        this.agrupadoPorCiudades();
      }, error => {
        console.error('Error cargando datos', error);
      });
  }

  private agrupadoPorCiudades(): void {
    // Crear un mapa para contar los restaurantes por ciudad
    const ciudadesMap = new Map<string, Ciudad>();
    // Iterar sobre el arreglo de restaurantes
    this.arregloRestaurantes.forEach(restaurante => {
      // Verificar si la ciudad del restaurante ya está en el mapa
      if (ciudadesMap.has(restaurante.codCiudad._id)) {
        // Si la ciudad ya está en el mapa, simplemente la saltamos
        return;
      } else {
        // Buscar la ciudad correspondiente en el arreglo de ciudades
        const ciudad = this.arregloCiudades.find(c => c._id === restaurante.codCiudad._id);
        if (ciudad) {
          // Si la ciudad existe, añadirla al mapa
          ciudadesMap.set(ciudad._id, ciudad);
        }
      }
    });

    // Convertir los valores del mapa a un arreglo
    this.arregloCiudadesAgrupadas = Array.from(ciudadesMap.values());
  }

}