import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uri_const_auth } from '../const/uri_const_auth';
import { UserRequest } from '../dto/user.request';
import { userResponse } from '../dto/user.response';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  private url = uri_const_auth.authClient;

  constructor(
    private http:HttpClient
  ) { }

  loguin(user:UserRequest):Observable<userResponse>{
    return this.http.post<userResponse>(`${this.url}auth`,user);
  }
}
