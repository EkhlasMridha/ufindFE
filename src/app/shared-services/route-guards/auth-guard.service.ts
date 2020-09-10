import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivateChild,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../utilities/token.service';
import { DomainService } from '../utilities/domain.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if (!this.tokenService.hasToken()) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> {
    console.log(this.tokenService.hasToken());
    if (!this.tokenService.hasToken()) {
      this.router.navigate(['signin']);
      return false;
    }
    return true;
  }
}
