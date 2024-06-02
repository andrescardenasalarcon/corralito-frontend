import { ErrorComponent } from './modulos/publico/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RUTAS_LANDSCAPE } from './utilidades/rutas/land-rutas';
import { RUTAS_DASHBOARD } from './utilidades/rutas/dash-rutas';
import { ContenedorLandComponent } from './modulos/contenedor/land/contenedor-land/contenedor-land.component';
import { ContenedorDashComponent } from './modulos/contenedor/dash/contenedor-dash/contenedor-dash.component';
import { VigilanteGuard } from './vigilante.guard';


const routes: Routes = [
  {path: '', component: ContenedorLandComponent, children: RUTAS_LANDSCAPE},
  {path: 'private', component: ContenedorDashComponent, children: RUTAS_DASHBOARD,
  canActivate: [VigilanteGuard]
},



  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
