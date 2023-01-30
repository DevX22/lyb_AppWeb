import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/dto/producto/categoria.dto';
import { Producto } from 'src/app/dto/producto/producto.dto';
import { User } from 'src/app/dto/user/user.dto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { LoadJsService } from 'src/app/service/load-js.service';
import { ProductoService } from 'src/app/service/producto.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user?: User;
  productos: Producto[] = [];
  categorias: Categoria[] = [];

  imagenes: any[] = [
    {
      imgUrl: 'assets/img/CarteraOferta1.jpg',
      nombreImg: '',
    },
    {
      imgUrl: 'assets/img/CarteraOferta2.jpg',
      nombreImg: '',
    },
    {
      imgUrl: 'assets/img/CarteraOferta3.jpg',
      nombreImg: '',
    },
    {
      imgUrl:
        'https://renzocosta.vteximg.com.br/arquivos/catalogo-hombre-morrales.jpg',
      nombreImg: '',
    },
  ];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private _packJS: LoadJsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCategoria();
    this.userService.getUser().subscribe({
      next: (data) => {
        this.user = data;
      },
    });

    this.getProductos();
  }

  logout() {
    this.userService.setUser(undefined);
    localStorage.removeItem('user');
  }

  getProductos() {
    this.productoService.getAll().subscribe({
      next: (data) => {
        this.productos = data;
      },
    });
  }

  getCategoria() {
    this.categoriaService.get().subscribe({
      next: (data) => {
        this.categorias = data;
      },
    });
  }

  filterCategoria() {}
}
