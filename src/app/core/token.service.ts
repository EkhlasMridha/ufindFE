import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

export interface TokenModel {
  token: string;
  isAdmin: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly accessToken: string = 'token';
  private readonly isAdmin: string = 'isAdmin';
  constructor (private jwtService: JwtHelperService, private http: HttpClient) { }

  storeToken(tokenModel: TokenModel) {
    localStorage.setItem(this.accessToken, tokenModel.token);
    localStorage.setItem(this.isAdmin, tokenModel.isAdmin);
  }

  removeToken() {
    localStorage.clear();
  }

  getToken(): TokenModel {
    let access = localStorage.getItem(this.accessToken);
    let isAdmin = localStorage.getItem(this.isAdmin);
    if (!(access)) {
      return null;
    }

    let token: TokenModel = {
      token: access,
      isAdmin: isAdmin
    };

    return token;
  }

  isTokenExpired(): boolean {
    let access = localStorage.getItem(this.accessToken);
    return this.jwtService.isTokenExpired(access);
  }

  // refreshAccessToken() {
  //   let token = this.getToken();
  //   if (token == null) {
  //     return null;
  //   }

  //   return this.http.post('identity/refresh', this.getToken());
  // }

  hasToken() {
    if (this.getToken() == null) {
      return false;
    }

    return true;
  }
}
