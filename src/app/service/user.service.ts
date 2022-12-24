import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserResponse } from '../dto/user/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?:User;
  userSubject:BehaviorSubject<User | undefined>=new BehaviorSubject<User | undefined>(undefined); 

  constructor() {
    const userRes=localStorage.getItem('user');
    if(userRes!==null){
        const X: UserResponse=JSON.parse(userRes);
        // validaR  si el toke es validado
        // si no es valido: borralo
        this.user=X.user;
        this.userSubject.next(this.user);
    }
  }

  getUser():Observable<User|undefined>{
    return this.userSubject.asObservable();
  }
  
  setUser(data?:User){
    this.user=data;
    this.userSubject.next(this.user);
  }

}
