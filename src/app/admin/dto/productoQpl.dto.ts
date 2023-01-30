export class ProductoDtoGpl {
  id: number;
  producto: string;
  descripcion: string;
  id_proveedor: number;
  proveedor: string;
  id_categoria: number;
  categoria: string;
  id_tipoMedida: number;
  tipoMedida: string;
  medida: string;
  alto: string;
  ancho: string;
  profundidad: string;
  precioCompra: number;
  precioVenta: number;
  stock: number;
  estado: boolean;
  colorProducto: ColorProductoDto[];
  imgProducto: ImgProductoDto[];

  constructor() {
    this.id = 0;
    this.producto = '';
    this.descripcion = '';
    this.id_proveedor = 0;
    this.proveedor = '';
    this.id_categoria = 0;
    this.categoria = '';
    this.id_tipoMedida = 0;
    this.tipoMedida = '';
    this.medida = '';
    this.alto = '';
    this.ancho = '';
    this.profundidad = '';
    this.precioCompra = 0.0;
    this.precioVenta = 0.0;
    this.stock = 0;
    this.estado = true;
    this.colorProducto = [];
    this.imgProducto = [];
  }
}

class ColorProductoDto {
  colorName: string;
  colorCode: string;
  constructor() {
    this.colorName = '';
    this.colorCode = '';
  }
}

class ImgProductoDto {
  nombreImg: string;
  imgUrl: string;
  constructor() {
    this.nombreImg = '';
    this.imgUrl = '';
  }
}
