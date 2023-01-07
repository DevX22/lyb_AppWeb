import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, concatMap, Observable, throwError } from 'rxjs';
import { SesionService } from '../share/service/sesion.service';
import { AuthUsserService } from '../auth/service/auth-usser.service';
import { Router } from '@angular/router';
import { tokenRefreshReq } from '../dto/user/token.refresh';
import { alert_error } from '../share/utils/alert.funcions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _sesionService:SesionService,
    private _authService:AuthUsserService,
    private router:Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this._sesionService.isLogged()){
      return next.handle(req);
    }
    let token = this._sesionService.getToken();
    if(!token){
      token="";
    }
    let request=req;
    request = this.addToken(request,token);
    return next.handle(request).pipe(
      catchError((err: any)=>{
        /*
        */
        let error= err.error;
        let firstError: boolean = false;
        let title: string = "Error no conocido | cominiquese con el area de TI";
        switch(err.status){
          case 401:
            if(token){
              const jwtRefresh: tokenRefreshReq = new tokenRefreshReq(token);
              return this._authService.refresh(jwtRefresh).pipe(concatMap((data:tokenRefreshReq)=>{
                // refreshing token
                this._sesionService.setToken(data.token);
                request = this.addToken(request,data.token);
                return next.handle(request);
              }));
            }
            else{
              this.router.navigate(['/']);
            }
            break;
          case 500:
            if(!token){
              alert_error(title,error.message);
            }
            break;
          case 404:
            alert_error(title,"recurso no encontrado: Error 404");
            break;
          case 400:
            break;
          default:
            if(!token){
              alert_error(title,error.message);
            }
            break;
        }
        return throwError(err.estatus);
      })
    )
  }

  private addToken(req: HttpRequest<any>, token:string):HttpRequest<any>{
    return req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });
  }

}
