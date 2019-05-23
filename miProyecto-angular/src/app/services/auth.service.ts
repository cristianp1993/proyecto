import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<Boolean>(this.token.loggedin());

  
  authStatus = this.loggedIn.asObservable();
  
  changeAuthStatus(value : boolean){
    
    this.loggedIn.next(value);
    
  }
  
  constructor(private token:TokenService) { }

}
