import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAdminComponent } from './producto-admin/producto-admin.component';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';
import { ProductoEditPhotoComponent } from './producto-edit-photo/producto-edit-photo.component';
import { ProductoDetailsComponent } from './producto-details/producto-details.component';

const routes: Routes = [
  { path: 'manageproduct', component: ProductoAdminComponent },
  { path: 'addproduct', component: ProductoCrearComponent },
  { path: 'detailsproduct/:codProducto', component: ProductoDetailsComponent},
  { path: 'editproduct/:codProducto', component: ProductoEditarComponent},
  { path: 'editproductfoto/:codProducto', component: ProductoEditPhotoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],

})
export class ProductoRoutingModule { }
