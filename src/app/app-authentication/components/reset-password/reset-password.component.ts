import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Routes } from '@angular/router';
import { FormService } from 'src/app/shared-services/utilities/form.service';
import { ResetPassWord } from '../../models/reset-password.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  errorObserver$ = {
    email: null,
    passwordHash: null,
    confirmPassword: null,
  };
  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private routes: ActivatedRoute,
    private authService: AuthService
  ) {
    this.resetForm = this.createForm();
  }
  ngOnInit(): void {
    this.formService.handleFormError(
      this.resetForm,
      this.errorObserver$,
      this.errorGenerator
    );
    this.resetForm.controls['confirmPassword'].disable();
  }

  getTokenFromParam(): string {
    let token = this.routes.snapshot.queryParams.token;
    return token;
  }

  errorGenerator(errorName: string, owner: string) {
    console.log(owner);
    switch (owner) {
      case 'email':
        if (errorName == 'required') {
          return 'Email is required';
        } else {
          return 'Please enter valid mail';
        }
      case 'passwordHash':
        if (errorName == 'required') {
          return 'Password is required';
        } else {
          return 'Password must contain digit, uppercase-lowercase letter & min length 6 max 12';
        }
      case 'confirmPassword':
        if (errorName == 'required') {
          return 'This field is required';
        } else {
          return 'Password must match';
        }
    }
  }

  createForm() {
    return this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        passwordHash: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$'
            ),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [
          this.MustMatch('passwordHash', 'confirmPassword'),
          this.shoudDisable('passwordHash', 'confirmPassword'),
        ],
      }
    );
  }

  shoudDisable(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      firstControl.valueChanges.subscribe((res) => {
        if (res.length < 6 || firstControl.errors) {
          secondControl.setValue('');
          secondControl.disable({ emitEvent: false, onlySelf: true });
        } else {
          secondControl.enable({ emitEvent: false, onlySelf: true });
        }
      });
    };
  }

  MustMatch(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      if (secondControl.errors && secondControl.errors.mustMatch) {
        return;
      }

      if (firstControl.value !== secondControl.value) {
        return secondControl.setErrors({ mustMatch: true });
      } else {
        secondControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (!this.resetForm.valid) {
      this.formService.checkFormStatus(this.resetForm);
      return;
    }
    const result: ResetPassWord = Object.assign({}, this.resetForm.value);
    result.resetToken = this.getTokenFromParam();
    console.log(result);

    this.authService.resetPassword(result).subscribe((res) => {
      console.log(res);
    });
  }
}
