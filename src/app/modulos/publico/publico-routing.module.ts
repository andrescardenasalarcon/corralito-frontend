import { ErrorComponent } from './error/error.component';
import { AcercaComponent } from './acerca/acerca.component';
import { EventoComponent } from './evento/evento.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CiudadComponent } from './ciudad/ciudad.component';
import { MenuComponent } from './menu/menu.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoComponent } from './producto/producto.component';
import { MenuDetalleComponent } from './menu-detalle/menu-detalle.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'city', component: CiudadComponent },
  { path: 'restaurant', component: RestauranteComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/detail/:cod', component: MenuDetalleComponent },
  { path: 'product', component: ProductoComponent },
  { path: 'event', component: EventoComponent },
  { path: 'about', component: AcercaComponent },
  { path: 'login', component: AccesoComponent },
  { path: 'signin', component: RegistroComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }, //Ruta que no existe
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
