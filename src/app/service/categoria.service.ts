import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../dto/producto/categoria.dto';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  get(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(
      `${environment.uri_back_end}/categoria/list`
    );
  }


}
