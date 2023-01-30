import { gql } from 'apollo-angular';

export const QUERY_PRODUCTOS_GQL = {
  ls_small: gql`
    {
      productos(req: {}) {
        id
        producto
        descripcion
        precioVenta
        imgProducto {
          imgUrl
        }
        colorProducto {
          colorCode
        }
      }
    }
  `,
  ls_medium: gql`
    {
      productos(req: {}) {
        id
        producto
        descripcion
        proveedor
        categoria
        tipoMedida
        medida
        alto
        ancho
        profundidad
        precioVenta
        stock
        colorProducto {
          colorCode
        }
        imgProducto {
          imgUrl
        }
      }
    }
  `,
  ls_large: gql`
    {
      productos(req: {}) {
        id
        producto
        descripcion
        proveedor
        categoria
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
  ls_todo: gql`
    {
      productos(req: {}) {
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
