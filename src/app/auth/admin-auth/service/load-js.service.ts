import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadJsService {

  constructor() { }

  changeJS(files:string[],tagName:string){
    for(let file of files){
      let script=document.createElement("script");
      script.src='./app/auth/admin-auth/assets/js/'+file+'.js';
      let addTag=document.getElementsByTagName(`${tagName}`)[0];
      addTag.appendChild(script);
    }
  }
}
