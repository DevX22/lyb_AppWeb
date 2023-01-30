import { CategoriaModel } from './categoria.model';

export class RequestProductoModel {
  categorias: CategoriaModel[];
  isOrderByAZ: boolean;
  isOrderByZA: boolean;
  isOrderByMenorMayor: boolean;
  isOrderByMayorMenor: boolean;

  constructor() {
    this.categorias = [];
    this.isOrderByAZ = false;
    this.isOrderByZA = false;
    this.isOrderByMayorMenor = false;
    this.isOrderByMenorMayor = false;
  }
}
