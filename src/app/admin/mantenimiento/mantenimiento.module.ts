import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
