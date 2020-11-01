import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationModel } from '../../config/navigation.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  navigations: NavigationModel[] = [
    {
      name: "Navigation 1",
      route: "home",
      matIcon:"home"
    },
    {
      name: "Navigation 2",
      route: "home",
      matIcon:"home"
    },
    {
      name: "Navigation 2",
      route: "home",
      matIcon:"home"
    }
  ]

  constructor (private breakpointObserver: BreakpointObserver) { }

  openDrawer(drawer:MatDrawer) {
    drawer.toggle();
  }
}
