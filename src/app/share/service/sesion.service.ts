import { Injectable } from '@angular/core';
import { userResponse } from '../../auth/dto/user.response';
import * as CryptoJS from 'crypto-js';
import { uri_const_auth } from '../../auth/const/uri_const_auth';
import { userModel } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor() { }

  setVariableSesion(token:string, user:userModel){
    let userE=JSON.stringify(user);
    userE=CryptoJS.AES.encrypt(userE,uri_const_auth.textEncryp).toString();
    localStorage.setItem('token',token);
    localStorage.setItem('Keys',userE);
  }
  getVariableSesion(Variable:string){
    return localStorage.getItem(Variable);
  }

  setToken(token:string){
    localStorage.removeItem('token');
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserSesion(){
    let user=localStorage.getItem('Keys')
    if(user!=null){
      user=CryptoJS.AES.decrypt(user,uri_const_auth.textEncryp).toString(CryptoJS.enc.Utf8);
    }
    return user;
  }

  signOff(){
    localStorage.clear();
  }

  isLogged():boolean{
    if(this.getVariableSesion('token')){
      return true;
    }
    return false;
  }
}
