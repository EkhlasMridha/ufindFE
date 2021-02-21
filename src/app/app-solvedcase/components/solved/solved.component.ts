import { Component, OnInit } from '@angular/core';
import { DomainService } from '@core/domain.service';
import { CaseModel } from 'src/app/app-dashboard/models/cases.model';
import { SolvedcaseService } from '../../services/solvedcase.service';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.component.html',
  styleUrls: ['./solved.component.scss']
})
export class SolvedComponent implements OnInit {
  caseList: CaseModel[];
  constructor (private solvedCase: SolvedcaseService) { }

  ngOnInit(): void {
    this.getSolvedCase();
  }

  getFullBlobUrl(imagePath: string) {
    return DomainService.domains.blobHost + imagePath;
  }

  getSolvedCase() {
    this.solvedCase.getSolvedCases().subscribe(res => {
      this.caseList = res;
    });
  }
}
