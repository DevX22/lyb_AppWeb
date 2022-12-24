import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarruselComponent } from './custom-carrusel/custom-carrusel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BallLoaderComponent } from './ball-loader/ball-loader.component';



@NgModule({
  declarations: [
    CustomCarruselComponent,
    BallLoaderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports:[
    CarouselModule,
    CustomCarruselComponent,
    BallLoaderComponent
  ]
})
export class UtilitariosModule { }
