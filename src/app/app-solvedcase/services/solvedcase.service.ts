import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaseModel } from 'src/app/app-dashboard/models/cases.model';

@Injectable({
  providedIn: 'root'
})
export class SolvedcaseService {

  constructor (private http: HttpClient) { }

  getSolvedCases() {
    return this.http.get<CaseModel[]>('solved-case');
  }
}
