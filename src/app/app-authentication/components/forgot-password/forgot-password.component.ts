import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  errorGenerator$ = {
    user: null,
  };
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private authService: AuthService
  ) {
    this.forgotForm = this.createForm();
  }

  ngOnInit(): void {
    this.formService.handleFormError(
      this.forgotForm,
      this.errorGenerator$,
      this.generateError
    );
  }

  generateError(errorName: string, owner: string) {
    switch (owner) {
      case 'user':
        if (errorName == 'required') {
          return 'Field is required';
        }
    }
  }

  createForm() {
    return this.formBuilder.group({
      user: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.forgotForm.valid) {
      this.formService.checkFormStatus(this.forgotForm);
      return;
    }

    const result = Object.assign({}, this.forgotForm.value);

    console.log(result);
    this.authService.resetRequest(result.user).subscribe((res) => {
      console.log(res);
    });
  }
}
