import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomainService } from '@core/domain.service';
import { CaseModel } from '../../models/cases.model';
import { FoundModel } from '../../models/found.model';
import { DashboardService } from '../../services/dashboard.service';
import { RootlineDialogService } from "@rootline-dialog";

@Component({
  selector: 'app-find-modal',
  templateUrl: './find-modal.component.html',
  styleUrls: ['./find-modal.component.scss']
})
export class FindModalComponent implements OnInit {
  data: CaseModel;
  foundPersonList: FoundModel[];
  constructor (@Inject(MAT_DIALOG_DATA) data: any, private dasboardService: DashboardService, private rootlineDialog: RootlineDialogService) {
    this.data = data;
  }

  ngOnInit(): void {
    let dialog = this.rootlineDialog.openConfirmationModal({ loaderText: 'Finding matches ...', isLoader: true, disableClose: true });
    this.dasboardService.matchPhoto(this.data).subscribe(res => {
      this.foundPersonList = this.preparePerson(res);
      dialog.close();
    });
  }

  preparePerson(personList: FoundModel[]) {
    personList.forEach(person => {
      person.image = DomainService.domains.blobHost + person.image;
    });
    return personList;
  }

  markSolved() {
    console.log(this.data);
    this.dasboardService.markAsSolved(this.data).subscribe(res => {
      console.log(res);
    });
  }
}
