import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/share/guard/admin-guard.guard';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {
    path:'categorias',component:CategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
