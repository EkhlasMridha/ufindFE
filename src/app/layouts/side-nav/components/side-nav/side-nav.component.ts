import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavTracerService } from '@core/nav-tracer.service';
import { NavigationModel } from '../../config/navigation.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  activatedRoute: string = '';
  isAdmin: string;
  navigations: NavigationModel[] = [
    {
      name: "Dashboard",
      route: "dashboard",
      matIcon: "dashboard",
      isVisible: true,
      role: 'common'
    },
    {
      name: "Submit case",
      route: "submit-case",
      matIcon: "cloud_circle",
      isVisible: false,
      role: 'station'
    },
    {
      name: 'Create user',
      route: 'user-create',
      matIcon: 'accessibility',
      role: 'admin'
    }
  ];

  constructor (private breakpointObserver: BreakpointObserver, private navTracer: NavTracerService) {
    this.isAdmin = localStorage.getItem('isAdmin');
  }
  ngOnInit(): void {
    this.navTracer.routeReceiver.subscribe(res => {
      this.activatedRoute = res;
    });
    this.navigations = this.prepareNavigations(this.navigations);
  }

  openDrawer(drawer: MatDrawer) {
    drawer.toggle();
  }

  prepareNavigations(navigationList: NavigationModel[]) {
    let navigations: NavigationModel[] = navigationList.filter(nav => {
      if (nav.role == 'admin' && this.isAdmin == 'true') {
        return nav;
      } else if (nav.role == 'station' && this.isAdmin == 'false') {
        return nav;
      } else if (nav.role == 'common') {
        return nav;
      }
    });

    return navigations;
  }
}
