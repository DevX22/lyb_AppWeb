import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userModel } from 'src/app/share/model/user.model';
import { SesionService } from 'src/app/share/service/sesion.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  users:userModel=new userModel();

  constructor(
    private _sessionService:SesionService,
    private _router:Router,
    ) { 
  }

  ngOnInit(): void {
    this.llenarDataUser();
  }
  
  activeSubMenuOne(){
    document.getElementById('subMenu-one')?.classList.toggle('showMenu');
  }

  activeSubMenuTwo(){
    document.getElementById('subMenu-two')?.classList.toggle('showMenu');
  }

  activeSubMenuThree(){
    document.getElementById('subMenu-three')?.classList.toggle('showMenu');
  }
  activeSubMenuFour(){
    document.getElementById('subMenu-four')?.classList.toggle('showMenu');
  }
  activeSubMenuFive(){
    document.getElementById('subMenu-five')?.classList.toggle('showMenu');
  }

  cerrarSession(){
    this._sessionService.signOff();
    this._router.navigate(["/admin"]);
  }

  llenarDataUser(){
    let user=this._sessionService.getUserSesion();
      if(user!=null){
        this.users=JSON.parse(user);
      }
  }
}
