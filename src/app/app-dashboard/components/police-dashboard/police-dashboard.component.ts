import { Component, OnInit } from '@angular/core';
import { DomainService } from '@core/domain.service';
import { CaseModel } from '../../models/cases.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'police-dashboard',
  templateUrl: './police-dashboard.component.html',
  styleUrls: ['./police-dashboard.component.scss']
})
export class PoliceDashboardComponent implements OnInit {
  caseList: CaseModel[];
  imageURL: string;
  constructor (private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCaseList();
  }

  getCaseList() {
    this.dashboardService.getUnsolvedCases().subscribe(res => {
      this.caseList = res;
    });
  }

  getFullBlobUrl(imagePath: string) {
    return DomainService.domains.blobHost + imagePath;
  }
}
