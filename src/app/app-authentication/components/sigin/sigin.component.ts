import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ transform: 'translateX(-350px)', opacity: 0 }),
        animate(
          '1s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class SiginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    const result = Object.assign({}, this.loginForm.value);
    console.log(result);
  }
}
