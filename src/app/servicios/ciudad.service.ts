import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../modelos/Ciudad';
import { HttpClient } from '@angular/common/http';
import * as miUrl from '../utilidades/dominios/uris';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  public apiCiudad: string = miUrl.API_CIUDAD;

  constructor(private http: HttpClient) { }

  public obtenerCiudadades():Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(this.apiCiudad + '/all');
  }
  public obtenerIdCiudadades():Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(this.apiCiudad + '/allId');
  }
}
