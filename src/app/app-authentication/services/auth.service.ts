import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpModel } from '../models/signup.model';
import {
  tap,
  retry,
  catchError,
  retryWhen,
  take,
  concatMap,
  delay,
} from 'rxjs/operators';
import {
  TokenService,
  TokenModel,
} from 'src/app/shared-services/utilities/token.service';
import { throwError, of } from 'rxjs';
import { ErrorHandlerService } from 'src/app/shared-services/utilities/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private erroHandler: ErrorHandlerService
  ) {}

  signUp(payload: SignUpModel) {
    return this.http.post('identity/signup', payload).pipe(
      take(1),
      catchError((err) => {
        return throwError(err);
      }),
      retryWhen(this.erroHandler.hanldeRetry())
    );
  }

  signin(payload: any) {
    return this.http.post<TokenModel>('identity/login', payload).pipe(
      take(1),
      catchError((err) => {
        return throwError(err);
      }),
      retryWhen(this.erroHandler.hanldeRetry()),
      tap((res) => {
        this.tokenService.storeToken(res);
      })
    );
  }
}
