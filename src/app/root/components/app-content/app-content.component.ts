import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
