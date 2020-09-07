import { Component, OnInit } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor(private confirmationService: ConfirmationStatusService) {}

  ngOnInit(): void {}

  runCommand() {
    this.confirmationService.openConfirmationModal({
      headerText: 'How are you guys?',
      description:
        'This is a test generic modal system for all possible cases.',
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
