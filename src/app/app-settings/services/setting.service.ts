import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor (private http: HttpClient) { }

  changePass(payload: any) {
    return this.http.post('change-password', payload);
  }
}
