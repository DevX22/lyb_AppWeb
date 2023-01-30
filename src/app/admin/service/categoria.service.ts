import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from 'src/app/share/model/categoria.model';
import { uri_const_mant } from '../const/uri_const_mant';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url=uri_const_mant.categoria;

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<CategoriaModel[]>{
    return this.http.get<CategoriaModel[]>(`${this.url}list`);
  }

  Create(obj:CategoriaModel):Observable<boolean>{
    return this.http.post<boolean>(`${this.url}create`, obj);
  }

  update(obj:CategoriaModel):Observable<boolean>{
    return this.http.put<boolean>(`${this.url}update`, obj);
  }
}
