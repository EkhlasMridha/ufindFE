import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ transform: 'translateX(-350px)', opacity: 0 }),
        animate(
          '1.5s ease-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '1.5s ease-in',
          style({ transform: 'translateX(-350px)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class SiginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
