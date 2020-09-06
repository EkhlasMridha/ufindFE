import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'root-line';
  constructor(private routes: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((res) => {
      console.log(this.routes.root);
    });
  }
}
