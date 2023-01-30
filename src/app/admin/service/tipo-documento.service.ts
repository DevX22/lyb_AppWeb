import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uri_const_mant } from '../const/uri_const_mant';
import { TipoDocumentoModel } from '../model/tipoDoc.model';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  url = uri_const_mant.tipoDoc;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoDocumentoModel[]> {
    return this.http.get<TipoDocumentoModel[]>(`${this.url}list`);
  }
}
