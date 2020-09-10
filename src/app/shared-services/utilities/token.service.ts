import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface TokenModel {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly accessToken: string = 'accessToken';
  private readonly refreshToken: string = 'refreshToken';
  constructor(private jwtService: JwtHelperService) {}

  storeToken(token: TokenModel) {
    localStorage.setItem(this.accessToken, token.accessToken);
    localStorage.setItem(this.refreshToken, token.refreshToken);
  }

  getToken(): TokenModel {
    let access = localStorage.getItem(this.accessToken);
    let refresh = localStorage.getItem(this.refreshToken);
    let token: TokenModel = {
      accessToken: access,
      refreshToken: refresh,
    };

    return token;
  }

  isTokenExpired(): boolean {
    let access = localStorage.getItem(this.accessToken);
    return this.jwtService.isTokenExpired(access);
  }
}
