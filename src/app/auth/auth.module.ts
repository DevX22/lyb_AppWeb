import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { UtilitariosModule } from '../utilitarios/utilitarios.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    UtilitariosModule
  ]
})
export class AuthModule { }


