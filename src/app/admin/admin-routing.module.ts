import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../share/guard/admin-guard.guard';
import { AuthGuard } from '../share/guard/auth-guard.guard';
import { VentaGuard } from '../share/guard/venta-guard.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import("../auth/admin-auth/admin-auth.module").then(x=>x.AdminAuthModule),
  }
  ,
  {
    path:'dashboard',
    canActivate:[AdminGuard||VentaGuard],
    loadChildren:()=> import("./dashboard/dashboard.module").then(x=>x.DashboardModule)
  }
  ,
  {
    path:'mant',
    canActivate:[AdminGuard],
    loadChildren:()=> import("./mantenimiento/mantenimiento.module").then(x=>x.MantenimientoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
