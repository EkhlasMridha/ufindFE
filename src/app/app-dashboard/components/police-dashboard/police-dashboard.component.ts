import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomainService } from '@core/domain.service';
import { FindModalComponent } from '../../modals/find-modal/find-modal.component';
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
  constructor (private dashboardService: DashboardService, private dialog: MatDialog) { }

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

  checkUpdate() {
    this.dialog.open(FindModalComponent, {
      width: 'auto'
    });
  }
}
