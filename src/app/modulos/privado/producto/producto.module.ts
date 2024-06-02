import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';
import { ProductoAdminComponent } from './producto-admin/producto-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ProductoDetailsComponent } from './producto-details/producto-details.component';
import { ProductoEditPhotoComponent } from './producto-edit-photo/producto-edit-photo.component';



@NgModule({
  declarations: [
    ProductoCrearComponent,
    ProductoEditarComponent,
    ProductoAdminComponent,
    ProductoDetailsComponent,
    ProductoEditPhotoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    NgxPaginationModule,
    FormsModule,
  ]
})
export class ProductoModule { }
