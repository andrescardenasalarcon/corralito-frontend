import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as miUrl from '../utilidades/dominios/uris';
import { Restaurante } from '../modelos/Restaurante';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  public apiRestaurante: string = miUrl.API_RESTAURANTE;

  constructor(private http: HttpClient) { }

  public obtenerRestaurantes(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.apiRestaurante + '/all');
  }

  public obtenerRestauranteXCiudad(): Observable<Restaurante[]> {
    return this.http.get<Restaurante[]>(this.apiRestaurante + '/city');
  }
}
