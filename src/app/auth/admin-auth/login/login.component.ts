import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { alert_warning } from 'src/app/share/utils/alert.funcions';
import { UserRequest } from '../../dto/user.request';
import { userResponse } from '../../dto/user.response';
import { AuthUsserService } from '../../service/auth-usser.service';
import { LoadJsService } from '../service/load-js.service';
import { SesionService } from '../../../share/service/sesion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('stateLoguin') stateLoguin?:ElementRef;
  userReq:UserRequest=new UserRequest();
  userRes:userResponse=new userResponse();

  constructor(
    private loadJs:LoadJsService,
    private _authUser:AuthUsserService,
    private _sesionService:SesionService,
    private _router:Router
    ) {}

  ngOnInit(): void {
    this.loadJs.changeJS(['animate-login'],'div');
  }

  loguinUser(){
    var state=document.getElementsByClassName('state')[0];
    var loguin=document.getElementsByClassName('login')[0];
    if(this.userReq.user!=null&&this.userReq.user!=""&&this.userReq.password!=null&&this.userReq.password!=""){
      this._authUser.loguin(this.userReq).subscribe(
        (data:userResponse)=>{
          this.userRes=data;
          this._sesionService.setVariableSesion(this.userRes.token,this.userRes.user);
          this.animateLogin(state,loguin,`¡Bienvenido ${this.userRes.user.nombreApellido}!`,"ok");
          setTimeout(()=>{
            this._router.navigate(["admin/dashboard"]);
          },1800);
        },
        err=>{
          if(err.status==404){
            this.animateLogin(state,loguin,"Datos Incorrectos","error");
            this.userRes=err.error;
          }
        }
      );
    }else{
      this.animateLogin(state,loguin,"Datos Incompletos","warning");
      setTimeout(()=>{
        alert_warning("Debe ingresar el usuario y contraseña");
      },1800);
    }
  }

  animateLogin(stateElemen:Element,loguinElement:Element,state:string,stateAnimate:string){
    setTimeout(()=>{
      loguinElement.classList.add(stateAnimate);
      stateElemen.innerHTML=state;
      setTimeout(()=>{
        stateElemen.innerHTML="Iniciar sesón";
        loguinElement.classList.remove("loading");
        loguinElement.classList.remove(stateAnimate);
      },1500);
    },1000);
  }

}