import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { RegistroSesion } from 'src/app/modelos/registro-sesion';
import { RegistroSesionService } from 'src/app/servicios/registro-sesion.service';

import * as sha512 from 'js-sha512';
import { RespuestaInicioSesion } from 'src/app/modelos/respuesta-inicio-sesion';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {

  private tmp: any;
  public objUsuario: RegistroSesion;
  public miSuscripcion: Subscription;
  public patronCorreo = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';


  constructor(private router: Router, public registroServicio: RegistroSesionService, public toastr: ToastrService) {
    this.objUsuario = new RegistroSesion("", "", "", "");
    this.miSuscripcion = this.tmp;
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {

    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe()
    }
  }

  public operacion(formulario: NgForm):void{
    const miNombre = this.objUsuario.nombresUsuario;
    const miApellido = this.objUsuario.apellidosUsuario;
    const miCorreo = this.objUsuario.correoAcceso;
    const miHash = sha512.sha512(this.objUsuario.claveAcceso);
    const miObj = new RegistroSesion(miNombre,miApellido,miCorreo,miHash);
    this.miSuscripcion = this.registroServicio.registroSesionBack(miObj).pipe(
      map((resultado: RespuestaInicioSesion) => {
        localStorage.setItem('token_usta',resultado.token);
        localStorage.setItem('foto_usta',resultado.base64Usuario);
        this.router.navigate(['/private/dash']);
        mostrarMensaje( 'success', 'Bienvenido al sistema', 'Correcto', this.toastr );
        formulario.reset();
       }), catchError((err) => {
        mostrarMensaje('error', 'Falló el Registro', 'Error', this.toastr);
        formulario.reset();
        throw err;
      })
    ).subscribe(observadoresAny);
  }

}
