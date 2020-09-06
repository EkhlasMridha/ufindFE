import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpModel } from '../../models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ transform: 'translateX(350px)', opacity: 0 }),
        animate(
          '1s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpModel: SignUpModel;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group(
      {
        firstName: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        lastName: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        userName: [
          '',
          Validators.compose([Validators.minLength(3), Validators.required]),
        ],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z]).{6,12}$'),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.MustMatch('password', 'confirmPassword'),
      }
    );
  }

  MustMatch(value1: string, value2: string) {
    return (formGroup: FormGroup) => {
      const firstControl = formGroup.controls[value1];
      const secondControl = formGroup.controls[value2];

      if (secondControl.errors && secondControl.errors.notMatch) {
        return;
      }

      if (firstControl.value !== secondControl.value) {
        return secondControl.setErrors({ notMatch: true });
      } else {
        secondControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (!this.signUpForm.valid) {
      return;
    }
    const result = Object.assign({}, this.signUpForm.value);
    this.signUpModel = result;
    console.log(this.signUpModel);
  }
}
