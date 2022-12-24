import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilitariosModule } from 'src/app/utilitarios/utilitarios.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    UtilitariosModule
  ]
})
export class StoreModule { }
