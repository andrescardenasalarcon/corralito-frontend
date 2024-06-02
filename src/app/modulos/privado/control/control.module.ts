import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlRoutingModule } from './control-routing.module';
import { ErrorInternoComponent } from './error-interno/error-interno.component';
import { InicioInternoComponent } from './inicio-interno/inicio-interno.component';



@NgModule({
  declarations: [
    ErrorInternoComponent,
    InicioInternoComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
