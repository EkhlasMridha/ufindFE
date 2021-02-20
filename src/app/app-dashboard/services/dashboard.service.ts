import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaseModel } from '../models/cases.model';
import { FoundModel } from '../models/found.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor (private http: HttpClient) { }

  submitCase(value: any) {
    return this.http.post('case', value);
  }

  getUnsolvedCases() {
    return this.http.get<CaseModel[]>('get-cases');
  }

  getAllCases() {
    return this.http.get<CaseModel[]>('allcase');
  }

  getUserList() {
    return this.http.get<any[]>('alluser');
  }

  matchPhoto(payload: any) {
    return this.http.post<FoundModel[]>('match', payload);
  }

  deleteCase(payload: CaseModel) {
    return this.http.post('delete-case', payload);
  }
}
