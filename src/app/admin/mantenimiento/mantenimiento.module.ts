import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
 
import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    CheckboxModule,
    FormsModule,
    TableModule
  ]
})
export class MantenimientoModule { }
