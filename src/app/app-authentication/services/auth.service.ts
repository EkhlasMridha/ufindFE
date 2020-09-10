import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';
import { SignUpModel } from '../models/signup.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(payload: SignUpModel) {
    return this.http.post(
      DomainService.domains.apiHost + 'identity/signup',
      payload
    );
  }
}
