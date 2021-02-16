import { Component, OnInit } from '@angular/core';
import { CaseData } from '../../models/casedata.model';
import { CaseModel } from '../../models/cases.model';
import { DashboardService } from '../../services/dashboard.service';
import { forkJoin, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  caseList: CaseModel[];
  caseData: Partial<CaseData>;
  userList: any[];
  isLoading: Boolean = false;

  subscription: Subscription;
  constructor (private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getDashBoardData();
  }

  getAllcases() {
    return this.dashboardService.getAllCases().pipe(
      tap(res => {
        this.caseData = this.extractCaseData(res);
        this.caseList = res;
      })
    );
  }

  getUserList() {
    return this.dashboardService.getUserList().pipe(
      tap(res => {
        this.userList = res;
      })
    );
  }

  getDashBoardData() {
    let apiList = [
      this.getAllcases(),
      this.getUserList()
    ];

    this.isLoading = true;
    this.subscription = forkJoin(apiList).subscribe(res => {
      this.isLoading = false;
    });
  }



  extractCaseData(caseList: CaseModel[]) {
    let caseData: Partial<CaseData> = {};
    let solved: number = 0;
    let unsolved: number = 0;
    caseList.forEach(value => {
      if (value.isSolved) {
        ++solved;
      } else {
        ++unsolved;
      }
    });

    caseData.solved = solved;
    caseData.unsolved = unsolved;

    return caseData;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
