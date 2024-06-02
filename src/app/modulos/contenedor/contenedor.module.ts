import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { CabeceraLandComponent } from './land/cabecera-land/cabecera-land.component';
import { ContenedorLandComponent } from './land/contenedor-land/contenedor-land.component';
import { CabeceraDashComponent } from './dash/cabecera-dash/cabecera-dash.component';
import { ContenedorDashComponent } from './dash/contenedor-dash/contenedor-dash.component';
import { MenuDashComponent } from './dash/menu-dash/menu-dash.component';



@NgModule({
  declarations: [
    CabeceraLandComponent,
    ContenedorLandComponent,
    CabeceraDashComponent,
    ContenedorDashComponent,
    MenuDashComponent,
    
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [CabeceraLandComponent, ContenedorLandComponent],
})
export class ContenedorModule { }
