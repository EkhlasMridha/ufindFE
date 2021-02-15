import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor (private http: HttpClient) { }

  submitCase(value: any) {
    return this.http.post('case', value);
  }

  getUnsolvedCases() {
    return this.http.get<any[]>('get-cases');
  }
}
