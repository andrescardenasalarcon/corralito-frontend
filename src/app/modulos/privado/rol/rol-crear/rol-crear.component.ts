import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, catchError, map } from 'rxjs';
import { Rol } from 'src/app/modelos/Rol';
import { RolService } from 'src/app/servicios/rol.service';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';

@Component({
  selector: 'app-rol-crear',
  templateUrl: './rol-crear.component.html',
  styleUrls: ['./rol-crear.component.css']
})
export class RolCrearComponent implements OnInit, OnDestroy {
  private tmp: any;
  public objRol: Rol;
  public miSuscripcion: Subscription;

  constructor(private router: Router,public rolService: RolService, public toastr: ToastrService){
    this.objRol = new Rol("","");
    this.miSuscripcion = this.tmp;
  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe()
    }
  }
  

  public creacion(formulario: NgForm):void{
    const miNombreRol = this.objRol.nombreRol;
    const miEstadoRol = this.objRol.estadoRol; 
    const nuevoRol = new Rol(miNombreRol,miEstadoRol);
    this.miSuscripcion = this.rolService.crearRoles(nuevoRol).pipe(
      map((respuesta:any)=>{
        mostrarMensaje('success', 'Nuevo Rol Creado!', 'Correcto', this.toastr);
        this.router.navigate(['/private/role/managerole']);
        formulario.reset();
      }),
      catchError((err)=>{
        mostrarMensaje('error', 'Falló la creación del rol', 'Error', this.toastr);
        formulario.reset();
        throw err;
      })
    ).subscribe(observadoresAny);
  }

  roles: Rol[] = [
    {estadoRol: "1", nombreRol: 'Activo'},
    {estadoRol: "2", nombreRol: 'Inactivo'},
  ];
}
