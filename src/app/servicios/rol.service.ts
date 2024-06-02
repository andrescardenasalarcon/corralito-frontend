import { Injectable } from '@angular/core';
import * as miUrl from '../utilidades/dominios/uris';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Rol } from '../modelos/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public apiRol: string = miUrl.API_ROLES

  constructor(private http: HttpClient) { }

  public obtenerRoles(): Observable<Rol[]> {
    const url = this.apiRol + '/all';
    return this.http.get<Rol[]>(url);
  }

  public crearRoles(objRol: Rol): Observable<Rol> {
    const url = this.apiRol + '/add';
    return this.http.post<Rol>(url, objRol);
  }
}
