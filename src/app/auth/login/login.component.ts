import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { HttpStatusEnum } from 'src/app/model/http-status.enum';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  flagLogin:HttpStatusEnum=HttpStatusEnum.none;
  httpStatus=HttpStatusEnum;
  constructor(
    private authService:AuthService,
    private router:Router,
    private userService:UserService
    ) { }

  ngOnInit(): void {
  }

  login(email:string,password:string){
    this.flagLogin=HttpStatusEnum.loading;
    this.authService.login(email,password).subscribe({
      next:(data:any)=>{
        localStorage.setItem('user',JSON.stringify(data));
        this.userService.setUser(data.user);
        this.router.navigate(['/','tienda']);
        this.flagLogin=HttpStatusEnum.success;
      },error:(data:any)=>{
        this.flagLogin=HttpStatusEnum.error;
      }
    })
  }
}
