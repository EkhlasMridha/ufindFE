import { InjectionToken } from '@angular/core';

export interface ModalConfig {
  headerText: string;
  description: string;
  primaryButtonName: string;
  secondaryButtonName: string;
  modalWidth: string;
  singleButton: boolean;
  primaryEvent: () => any;
  secondaryEvent: () => any;
}

export const DefaultConfig: Partial<ModalConfig> = {
  modalWidth: 'auto',
  singleButton: false,
  primaryEvent: () => {},
  secondaryEvent: () => {},
};

export interface ModalToken {
  default: ModalConfig;
  config: Partial<ModalConfig>;
}

export const CONFIRMATION_MODAL_CONFIG = new InjectionToken<ModalToken>(
  'ModalToken'
);
