import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationStatusComponent } from '../components/confirmation-status/confirmation-status.component';
import {
  ModalConfig,
  CONFIRMATION_MODAL_CONFIG,
  ModalToken,
} from '../configs/modal.config';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationStatusService {
  modalConfig: Partial<ModalConfig>;
  constructor(
    private dialog: MatDialog,
    @Inject(CONFIRMATION_MODAL_CONFIG) token: ModalToken
  ) {
    this.modalConfig = {
      ...token.default,
      ...token.config,
    };
    console.log(this.modalConfig);
  }

  private applyConfig(config: Partial<ModalConfig>) {
    this.modalConfig = {
      ...this.modalConfig,
      ...config,
    };
  }

  private openDialog(config: Partial<ModalConfig>) {
    this.applyConfig(config);
    return this.dialog.open(ConfirmationStatusComponent, {
      width: this.modalConfig.modalWidth,
      data: this.modalConfig,
    });
  }

  openConfirmationModal(
    config: Partial<ModalConfig>
  ): MatDialogRef<ConfirmationStatusComponent> {
    return this.openDialog(config);
  }
}
