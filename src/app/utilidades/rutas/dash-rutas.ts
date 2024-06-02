import { Routes } from '@angular/router';
import { ErrorInternoComponent } from 'src/app/modulos/privado/control/error-interno/error-interno.component';

export const RUTAS_DASHBOARD: Routes = [
    {path: 'dash', loadChildren:()=>import('../../modulos/privado/control/control.module').then((m)=>(m.ControlModule))},

    {path: 'role', loadChildren:()=>import('../../modulos/privado/rol/rol.module').then((m)=>(m.RolModule))},

    {path: 'product', loadChildren:()=>import('../../modulos/privado/producto/producto.module').then((m)=>(m.ProductoModule))},

    {path: '', redirectTo: 'dash', pathMatch: 'full'},

    {path: '**', component: ErrorInternoComponent},

];
