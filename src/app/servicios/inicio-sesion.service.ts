import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { InicioSesion } from '../modelos/inicio-sesion';
import * as miUrl from '../utilidades/dominios/uris';
import { RespuestaInicioSesion } from '../modelos/respuesta-inicio-sesion';
import { Router } from '@angular/router';
import { MiSesion } from '../modelos/mi-sesion';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  public apiInicioSesion: string = miUrl.API_INICIO_SESION;

  public objMiSesion: MiSesion;
  public fotoMiniatura: string;

  constructor(private http: HttpClient, private router: Router) {
    this.objMiSesion = this.inicializarMiSesion();
    this.fotoMiniatura = "";
  }

  //*************Metodos obligatorios */

  private inicializarMiSesion(): MiSesion {
    return new MiSesion("", "", "", "", "", "");
  }

  public iniciarSesionBack(objAcceso: InicioSesion): Observable<RespuestaInicioSesion> {
    return this.http.post<RespuestaInicioSesion>(this.apiInicioSesion + '/singin', objAcceso);
  }

  public salir(): void {
    localStorage.removeItem("foto_usta");
    localStorage.removeItem("token_usta");
    this.router.navigate(['/land/home'])
  }


  //****************************Logica de Negocio */

  public obtenerDatosSesion(): MiSesion {
    return this.objMiSesion;
  }

  //genera y verifica el usuario
  public verificarUsuario(): boolean {
    if (localStorage.getItem("token_usta")) {
      try {
        const miToken = String(localStorage.getItem("token_usta"));
        //const objTemp: any = jwtDecode(miToken);
        let objTemp : any = jwtDecode(miToken);
        this.objMiSesion.codMiSesion = objTemp.id;
        this.objMiSesion.correoMiSesion = objTemp.correoAcceso;
        this.objMiSesion.rolMiSesion= objTemp.nombreRol;
        this.objMiSesion.ciudadMiSesion= objTemp.nombreCiudad;
        this.objMiSesion.nombresMiSesion = objTemp.nombresUsuario;
        this.objMiSesion.apellidosMiSesion = objTemp.apellidosUsuarios;

        this.fotoMiniatura = String(localStorage.getItem("token_usta"));
        return true;


      } catch (error) {

      }

    }
    return false;
  }

}
