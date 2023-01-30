import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { userModel } from '../model/user.model';
import { SesionService } from '../service/sesion.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  user: userModel = new userModel();

  constructor(private _sesionService: SesionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let token = this._sesionService.getToken();
    let userText = this._sesionService.getUserSesion();
    if (userText != null) {
      this.user = JSON.parse(userText);
    } else {
      return false;
    }
    if (token == null || token == undefined || token == '') {
      return false;
    }
    if (
      this.user.rolUser == null ||
      this.user.rolUser == undefined ||
      this.user.rolUser != 'Administrador'
    ) {
      return false;
    }
    return true;
  }
}
