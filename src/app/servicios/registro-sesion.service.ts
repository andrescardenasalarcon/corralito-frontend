import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroSesion } from '../modelos/registro-sesion';
import * as miUrl from '../utilidades/dominios/uris';
import { RespuestaInicioSesion } from '../modelos/respuesta-inicio-sesion';

@Injectable({
  providedIn: 'root'
})
export class RegistroSesionService {
  public apiRegistroSesion: string = miUrl.API_REGISTRO_SESION;

  constructor(private http: HttpClient) { }

  public registroSesionBack(objRegistro:RegistroSesion): Observable<RespuestaInicioSesion> {
    return this.http.post<RespuestaInicioSesion>(this.apiRegistroSesion + '/user', objRegistro);
  }
}
