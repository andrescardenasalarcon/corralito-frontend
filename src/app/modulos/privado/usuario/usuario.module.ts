import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCrearComponent } from './usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioAdminComponent } from './usuario-admin/usuario-admin.component';



@NgModule({
  declarations: [
    UsuarioCrearComponent,
    UsuarioEditarComponent,
    UsuarioAdminComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
