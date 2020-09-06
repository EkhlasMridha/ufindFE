import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavTracerService {
  constructor(private titleService: Title, private router: Router) {}

  setTitle() {
    this.router.events.subscribe((res) => {});
  }

  private titleGenerator(routes: string[], title: string) {
    let decoratedRoute: string = '';
    let newTitle = title;
  }

  private getRefinedRouteArray(): string[] {
    let routes = this.router.url.toString();
    routes = routes.slice(1);
    let routeArray = routes.split('/');
    return routeArray;
  }
}
