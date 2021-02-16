import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsercreateService {

  constructor (private http: HttpClient) { }

  createUser(payload: any) {
    return this.http.post('register', payload);
  }
}
