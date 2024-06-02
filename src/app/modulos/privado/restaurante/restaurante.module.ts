import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteCrearComponent } from './restaurante-crear/restaurante-crear.component';
import { RestauranteEditarComponent } from './restaurante-editar/restaurante-editar.component';
import { RestauranteAdminComponent } from './restaurante-admin/restaurante-admin.component';



@NgModule({
  declarations: [
    RestauranteCrearComponent,
    RestauranteEditarComponent,
    RestauranteAdminComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }
