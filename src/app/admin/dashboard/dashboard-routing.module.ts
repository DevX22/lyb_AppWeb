import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/share/guard/admin-guard.guard';
import { AuthGuard } from 'src/app/share/guard/auth-guard.guard';
import { VentaGuard } from 'src/app/share/guard/venta-guard.guard';
import { LayoutComponent } from './layout/layout.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  {
    path:'',
    canActivate:[AuthGuard],
    component:LayoutComponent,
    children:[
      {
        path:'',
        canActivate:[AuthGuard],
        component:WorkspaceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
