import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../dto/user/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient) {
    }

  login(email:string,password:string):Observable<UserResponse>{
    const body={user:email,password};
    return this.http.post<UserResponse>(`${environment.uri_back_end}/cliente/auth`,body);
  }
}
