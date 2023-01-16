import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageClientRoutingModule } from './page-client-routing.module';
import { PageMainComponent } from './page-main/page-main.component';
import { LoadJsService } from 'src/app/service/load-js.service';
import { NgOptimizedImage } from "@angular/common";


@NgModule({
  declarations: [
    PageMainComponent
  ],
  imports: [
    CommonModule,
    PageClientRoutingModule,
    NgOptimizedImage
  ],
  providers:[LoadJsService]
  
})
export class PageClientModule { }
