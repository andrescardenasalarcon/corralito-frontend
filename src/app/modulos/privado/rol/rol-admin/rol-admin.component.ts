import { ToastrService } from 'ngx-toastr';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, finalize, map } from 'rxjs';
import { RolService } from 'src/app/servicios/rol.service';
import { observadoresAny } from 'src/app/utilidades/observadores/tipo-any';
import { Rol } from 'src/app/modelos/Rol';

@Component({
  selector: 'app-rol-admin',
  templateUrl: './rol-admin.component.html',
  styleUrls: ['./rol-admin.component.css']
})
export class RolAdminComponent implements OnInit, OnDestroy {

  private tmp: any;
  public cargaFinalizada: boolean;
  public arregloRoles: Rol[];
  public miSuscripcion: Subscription;

  constructor(private router: Router, private rolService: RolService, public toastr: ToastrService) {
    this.arregloRoles = [];
    this.cargaFinalizada = false;
    this.miSuscripcion = this.tmp;
  }

  ngOnInit(): void {
    this.obtenerRolesBack();
  }
  ngOnDestroy(): void {
    if (this.miSuscripcion) {
      this.miSuscripcion.unsubscribe()
    }
  }

  public obtenerRolesBack(): void {
    this.miSuscripcion = this.rolService
      .obtenerRoles()
      .pipe(
        map((respuesta: any) => {
          console.log(respuesta);
          this.arregloRoles = respuesta;
        }),
        finalize(() => {
          this.cargaFinalizada = true;
        })

      ).subscribe(observadoresAny);
  }

}
