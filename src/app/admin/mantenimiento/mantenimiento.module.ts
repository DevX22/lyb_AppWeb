import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CategoriaEditNewComponent } from './categoria/categoria-edit-new/categoria-edit-new.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedorEditNewComponent } from './proveedor/proveedor-edit-new/proveedor-edit-new.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoEditNewComponent } from './producto/producto-edit-new/producto-edit-new.component';
import { SearchProveedorComponent } from '../../share/Modals/proveedorSearch/proveedorSearch.component';

@NgModule({
  declarations: [
    CategoriaComponent,
    CategoriaEditNewComponent,
    ProveedorComponent,
    ProveedorEditNewComponent,
    ProductoComponent,
    ProductoEditNewComponent,
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    CheckboxModule,
    CardModule,
    FormsModule,
    NgOptimizedImage,
    CarouselModule.forRoot(),
    TableModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SearchProveedorComponent,
  ],
})
export class MantenimientoModule {}
