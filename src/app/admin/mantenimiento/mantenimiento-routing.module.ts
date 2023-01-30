import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriaComponent,
  },
  {
    path: 'proveedores',
    component: ProveedorComponent,
  },
  {
    path: 'productos',
    component: ProductoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoRoutingModule {}
