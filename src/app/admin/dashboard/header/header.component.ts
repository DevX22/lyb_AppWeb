import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/share/model/user.model';
import { SesionService } from 'src/app/share/service/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user:userModel=new userModel();

  constructor(
    private _sesionService:SesionService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.llenarDataUser();
  }

  activeMenu(){
    let sidebar = document.querySelector(".sidebar");
    if(document.getElementsByClassName('close')[0]){
      sidebar?.classList.toggle('close');
      sidebar?.classList.toggle('open');
      document.getElementById('home')?.classList.toggle('close');
      document.getElementById('contentid')?.classList.toggle('close');
    }else if(document.getElementsByClassName('open')[0]){
      sidebar?.classList.toggle('open');
      sidebar?.classList.toggle('close');
      document.getElementById('home')?.classList.toggle('close');
      document.getElementById('contentid')?.classList.toggle('close');
    }
  }

  llenarDataUser(){
    let user=this._sesionService.getUserSesion();
      if(user!=null){
        this.user=JSON.parse(user);
      }
  }

  menuUser(){
    document.getElementsByClassName('sub-menu-wrap')[0].classList.toggle('open-wrap')
  }

  cerrarSesion(){
    this._sesionService.signOff();
    this._router.navigate(["/admin"]);
  }

  muneNotifications(){
    
  }

}
