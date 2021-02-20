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

  checkUpdate(data: CaseModel) {
    this.dialog.open(FindModalComponent, {
      width: 'auto',
      data: data
    });
  }

  deleteCase(data: CaseModel) {
    console.log(data);
    this.dashboardService.deleteCase(data).subscribe(res => {
      console.log(res);
      this.caseList = this.deleteCaseData(this.caseList, data.id);
    });
  }

  deleteCaseData(data: CaseModel[], id: any) {
    let caseList = data.filter(c => {
      if (c.id != id) {
        return c;
      }
    });
    return caseList;
  }
}
