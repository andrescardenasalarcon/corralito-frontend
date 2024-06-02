import { Router } from '@angular/router';
import { InicioSesionService } from './../../../servicios/inicio-sesion.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { InicioSesion } from 'src/app/modelos/inicio-sesion';
import { NgForm } from '@angular/forms';

import * as sha512 from 'js-sha512';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { RespuestaInicioSesion } from 'src/app/modelos/respuesta-inicio-sesion';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit, OnDestroy {

  private tmp: any;
  public objUsuario: InicioSesion;
  public miSuscripcion: Subscription;
  public patronCorreo = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';


  constructor(private router: Router, public accesoServicio: InicioSesionService, public toastr: ToastrService) {
    this.objUsuario = new InicioSesion("", "");
    this.miSuscripcion = this.tmp;
  };

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe()
    }
  }

  public operacion(formulario: NgForm): void {
    const miHash = sha512.sha512(this.objUsuario.claveAcceso);
    const miCorreo:any = this.objUsuario.correoAcceso;
    const miObj = new InicioSesion(miCorreo, miHash);
    this.miSuscripcion = this.accesoServicio.iniciarSesionBack(miObj).pipe(
      map((resultado: RespuestaInicioSesion) => {
        localStorage.setItem('token_usta',resultado.token);
        localStorage.setItem('foto_usta',resultado.base64Usuario);
        formulario.reset();
        mostrarMensaje( 'success', 'Bienvenido al sistema', 'Correcto', this.toastr );
        this.router.navigate(['/private/dash']);
       }), catchError((err) => {
        mostrarMensaje('error', 'Falló el Login', 'Error', this.toastr);
        formulario.reset();
        throw err;
      })
    ).subscribe(observadoresAny);
  }

}
