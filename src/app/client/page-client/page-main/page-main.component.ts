import { emitDistinctChangesOnlyDefaultValue, makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoadJsService } from 'src/app/service/load-js.service';
import { init}  from 'aos';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  constructor(private _loadJsService:LoadJsService) { 
    
  }

  ngOnInit(): void {
    this.activenav();
    this._loadJsService.changeJS(['menu-reactivo'],'header');
    this._loadJsService.changeJS(['sliderPage'],'body');
    init();
  }
  
  activenav(){
    const nav=document.querySelector(".nav-header");
    const winMax=Number(document.querySelector(".home")?.clientHeight)
    window.addEventListener("scroll",function(){
      nav?.classList.toggle("active",window.scrollY>winMax-50);
    });
  }
}


