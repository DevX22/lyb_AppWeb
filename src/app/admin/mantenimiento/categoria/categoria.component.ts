import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from 'src/app/share/model/categoria.model';
import { CategoriaService } from '../../service/categoria.service';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias:CategoriaModel[] = [];

  constructor(
    private _categoriaService:CategoriaService
  ) {}

  ngOnInit(): void {
    this.listCategorias();
  }

  listCategorias(){
    this._categoriaService.getAll().subscribe((data:CategoriaModel[])=>{
      this.categorias = data;
    })
  }

}
