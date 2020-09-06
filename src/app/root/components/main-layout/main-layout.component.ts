import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavTracerService } from 'src/app/shared-services/utilities/nav-tracer.service';
import { DomainService } from 'src/app/shared-services/utilities/domain.service';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  BREAD_CRUMB_NAME: string = 'breadcrumb';
  constructor(
    private navTracer: NavTracerService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navTracer.setTitle(this.routes.root, DomainService.domains.AppName);
  }
}
