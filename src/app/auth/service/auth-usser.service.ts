import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tokenRefreshReq } from 'src/app/dto/user/token.refresh';
import { uri_const_auth } from '../const/uri_const_auth';
import { UserRequest } from '../dto/user.request';
import { userResponse } from '../dto/user.response';

@Injectable({
  providedIn: 'root'
})
export class AuthUsserService {

  private url = uri_const_auth.authUser;

  constructor(
    private http:HttpClient
  ) { }

  loguin(user:UserRequest):Observable<userResponse>{
    return this.http.post<userResponse>(`${this.url}auth`,user);
  }

  refresh(req:tokenRefreshReq):Observable<any>{
    return this.http.put<any>(`${this.url}refresh`,req);
  }
}
