import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomainService } from '@core/domain.service';
import { CaseModel } from '../../models/cases.model';
import { FoundModel } from '../../models/found.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-find-modal',
  templateUrl: './find-modal.component.html',
  styleUrls: ['./find-modal.component.scss']
})
export class FindModalComponent implements OnInit {
  data: CaseModel;
  foundPerson: FoundModel;
  constructor (@Inject(MAT_DIALOG_DATA) data: any, private dasboardService: DashboardService) {
    this.data = data;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.dasboardService.matchPhoto(this.data).subscribe(res => {
      this.foundPerson = this.preparePerson(res);
    });
  }

  preparePerson(person: FoundModel) {
    person.image = DomainService.domains.blobHost + person.image;
    return person;
  }
}
