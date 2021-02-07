import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { RootLineToasterService } from 'src/app/shared-modules/root-line-toaster/services/root-line-toaster.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { TesService } from '../../services/tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private testService: TesService,
  ) {
    this.testService.getData().subscribe((res) => {
      console.log('result');
      console.log(res);
    });
  }

  ngOnInit(): void { }
}
