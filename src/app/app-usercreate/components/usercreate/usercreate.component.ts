import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '@core/form.service';
import { UsercreateService } from '../../services/usercreate.service';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: boolean = false;
  constructor (private formBuilder: FormBuilder, private formService: FormService, private userService: UsercreateService) { }

  ngOnInit(): void {
    this.registerForm = this.createForm();
    this.formService.handleFormError(
      this.registerForm,
      this.errorObserver$,
      this.errorTypeGenerator
    );
  }

  errorObserver$ = {
    email: '',
    password: '',
  };

  errorTypeGenerator(type: string, owner: string) {
    switch (owner) {
      case 'email':
        return 'Emnail is required';
      case 'password':
        return 'Password is required';
    }
  }

  createForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      this.formService.checkFormStatus(this.registerForm);
      return;
    }
    const result = Object.assign({}, this.registerForm.value);
    this.isLoading = true;
    this.userService.createUser(result).subscribe(res => {
      console.log(res);
      this.isLoading = false;
    });
  }
}
