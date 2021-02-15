import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'police-dashboard',
  templateUrl: './police-dashboard.component.html',
  styleUrls: ['./police-dashboard.component.scss']
})
export class PoliceDashboardComponent implements OnInit {
  caseList: any[];
  constructor (private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCaseList();
  }

  getCaseList() {
    this.dashboardService.getUnsolvedCases().subscribe(res => {
      this.caseList = res;
    });
  }
}
