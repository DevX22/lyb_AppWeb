import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uri_const_mant } from '../const/uri_const_mant';
import { ProductoModel } from '../model/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  url = uri_const_mant.producto;

  constructor(private http: HttpClient) {}

  create(obj: ProductoModel) {
    return this.http.post(`${this.url}create`, obj);
  }

  update(obj: ProductoModel) {
    return this.http.put(`${this.url}update`, obj);
  }

  getById(id: number): Observable<ProductoModel> {
    return this.http.get<ProductoModel>(`${this.url}getById?id=${id}`);
  }
}
