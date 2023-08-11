import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = true;
  isAdmin: boolean = true;

  constructor() {}

  isAutenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin(){
    return this.isAdmin;
  }
}
