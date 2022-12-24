import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../dto/producto/color.dto';

@Injectable({
  providedIn: 'root',
})
export class ColorProductoService {
  constructor(private http: HttpClient) {}

  get(): Observable<Color[]> {
    return this.http.get<Color[]>(
      `${environment.uri_back_end}/colorProducto/listByProductId`
    );
  }
}
