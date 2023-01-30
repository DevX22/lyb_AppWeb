import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ProductoDtoGpl } from 'src/app/admin/dto/productoQpl.dto';
import { RequestProductoModel } from '../model/requestProducto.model';
import { QUERY_PRODUCTO_GQL } from '../queryGpl/queryProducto.gql';
import { QUERY_PRODUCTOS_GQL } from '../queryGpl/queryProductos.gql';

@Injectable({
  providedIn: 'root',
})
export class ProductoGqlService {
  QUERY_prods = QUERY_PRODUCTOS_GQL;
  QUERY_prod = QUERY_PRODUCTO_GQL;

  constructor(private apollo: Apollo) {}

  getAllGql(reques: RequestProductoModel) {
    return this.apollo.watchQuery<{ productos: ProductoDtoGpl[] }>({
      query: this.QUERY_prods.ls_small,
      variables: { req: reques },
    }).valueChanges;
  }

  getByIdGql(req: number) {
    return this.apollo.watchQuery<{ producto: ProductoDtoGpl }>({
      query: this.QUERY_prod.ls_todo,
      variables: { id: req },
    }).valueChanges;
  }
}
