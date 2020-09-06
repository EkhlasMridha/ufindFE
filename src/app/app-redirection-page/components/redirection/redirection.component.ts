import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.scss'],
})
export class RedirectionComponent implements OnInit {
  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log(this.routes.snapshot.data.breadcrumb);
  }
}
