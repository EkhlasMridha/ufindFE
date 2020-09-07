import { Component, OnInit } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { IconService } from 'src/app/shared-services/utilities/icon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor(
    private confirmationService: ConfirmationStatusService,
    private iconService: IconService
  ) {
    this.iconService.loadIcons(['like']);
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
}
