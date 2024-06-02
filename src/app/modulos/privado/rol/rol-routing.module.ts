import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolAdminComponent } from './rol-admin/rol-admin.component';
import { RolCrearComponent } from './rol-crear/rol-crear.component';
import { RolEditarComponent } from './rol-editar/rol-editar.component';
const routes: Routes = [
  {path:'managerole',component:RolAdminComponent},
  {path:'addrole',component:RolCrearComponent},
  {path:'editrole',component:RolEditarComponent},

  {path:'',redirectTo:'managerole', pathMatch: 'full'},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RolRoutingModule { }
