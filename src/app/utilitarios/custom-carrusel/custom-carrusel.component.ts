import { Component, Input, OnInit } from '@angular/core';
import { ListaCarrusel } from 'src/app/model/carrusel-lista.model';

@Component({
  selector: 'app-custom-carrusel',
  templateUrl: './custom-carrusel.component.html',
  styleUrls: ['./custom-carrusel.component.scss']
})
export class CustomCarruselComponent implements OnInit {

  @Input() imagenes:any[]=[];
  @Input() clasecss:string="";
  @Input() timer:number=1000;
  @Input() isAnimated:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
