import { TagContentType, TagDefinition, TaggedTemplateExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadJsService {

  constructor() { }

  changeJS(files:string[],tagName:string){
    for(let file of files){
      let script=document.createElement("script");
      script.src='./assets/js/'+file+'.js';
      let addTag=document.getElementsByTagName(`${tagName}`)[0];
      addTag.appendChild(script);
    }
  }
}
