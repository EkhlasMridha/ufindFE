import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ transform: 'translateX(350px)', opacity: 0 }),
        animate(
          '1.5s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '1.5s ease-in',
          style({ transform: 'translateX(350px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
