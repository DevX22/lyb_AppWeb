import { Color } from '../producto/color.dto';
import { Imagen } from '../producto/imagen.dto';

export interface Producto {
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
  precioVenta: number;
  stock: number;
  estado: boolean;
  colorProducto: Color[];
  imgProducto: Imagen[];
}
