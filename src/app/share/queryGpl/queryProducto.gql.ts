import { gql } from 'apollo-angular';

export const QUERY_PRODUCTO_GQL = {
  ls_todo: gql`
    {
      producto(id: int) {
        id
        producto
        descripcion
        id_proveedor
        proveedor
        id_categoria
        categoria
        id_tipoMedida
        tipoMedida
        medida
        alto
        ancho
        profundidad
        precioVenta
        stock
        estado
        colorProducto {
          colorName
          colorCode
        }
        imgProducto {
          nombreImg
          imgUrl
        }
      }
    }
  `,
};
