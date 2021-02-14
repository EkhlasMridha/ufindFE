import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor (private http: HttpClient) { }

  submitCase(payload: any) {
    return this.http.post("case", payload);
  }
}
