import { Component, OnInit } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';
import { TesService } from '../../services/tes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor(
    private confirmationService: ConfirmationStatusService,
    private iconService: IconService,
    private testService: TesService
  ) {
    this.iconService.loadIcons(['like']);
    this.testService.getData().subscribe((res) => {
      console.log('result');
      console.log(res);
    });
  }

  ngOnInit(): void {}

  runCommand() {
    this.confirmationService.openConfirmationModal({
      headerText: 'How are you guys?',
      description:
        'This is a test generic modal system for all possible cases.',
      primaryButtonName: 'Yes',
      secondaryButtonName: 'No',
      localIcon: 'like',
      type: 'success',
      primaryEvent: this.primaryButton,
      secondaryEvent: this.secondaryButton,
    });
  }

  primaryButton() {
    console.log('Customized callback');
  }

  secondaryButton() {
    console.log('Customized callback 2');
  }

  runLoader() {
    this.confirmationService.openConfirmationModal({
      headerText: 'How are you guys all?',
      primaryButtonName: 'Yes',
      secondaryButtonName: 'No',
      localIcon: 'like',
      type: 'success',
      primaryEvent: this.primaryButton,
      secondaryEvent: this.secondaryButton,
    });
  }
}
