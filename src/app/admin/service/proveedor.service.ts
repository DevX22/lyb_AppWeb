import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { uri_const_mant } from '../const/uri_const_mant';
import { ProveedorModel } from '../model/proveedor.model';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  url = uri_const_mant.proveedor;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProveedorModel[]> {
    return this.http.get<ProveedorModel[]>(`${this.url}list`);
  }

  create(obj: ProveedorModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}create`, obj);
  }

  update(obj: ProveedorModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.url}update`, obj);
  }
}
