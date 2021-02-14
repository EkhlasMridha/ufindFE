import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor (private http: HttpClient, private router: Router, private tokenService: TokenService) { }

  getProfile() {
    return this.http.get("profile");
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['signin']);
  }
}
