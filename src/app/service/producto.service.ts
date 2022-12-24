import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../dto/producto/producto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http:HttpClient
  ) { }

  get(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${environment.uri_back_end}/producto/list`);
  }
}
