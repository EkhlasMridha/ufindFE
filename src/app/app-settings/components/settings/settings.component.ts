import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@core/form.service';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  resetForm: FormGroup;
  isLoading: boolean = false;
  constructor (private formBuilder: FormBuilder, private formService: FormService, private settingsService: SettingService) { }

  errorObserver$ = {
    oldpass: '',
    newpass: ''
  };
  ngOnInit(): void {
    this.resetForm = this.createForm();
    this.formService.handleFormError(this.resetForm, this.errorObserver$, this.errorTypeGenerator);
  }

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'oldpass':
        return 'Field is required';
      case 'newpass':
        return 'Field is required';
    }
  }


  createForm() {
    return this.formBuilder.group({
      oldpass: ['', Validators.required],
      newpass: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.resetForm.valid) {
      this.formService.checkFormStatus(this.resetForm);
      return;
    }

    const result = Object.assign({}, this.resetForm.value);

    this.isLoading = true;
    this.settingsService.changePass(result).subscribe(res => {
      this.isLoading = false;
    });
  }
}
