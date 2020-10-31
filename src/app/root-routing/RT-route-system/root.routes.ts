import { Routes } from '@angular/router';
import * as fullPage from '../full-page.routes';
import * as business from '../app.routes';
import { NonavLayoutComponent } from '../../root/components/nonav-layout/nonav-layout.component';
import { PageLayoutComponent } from '../../root/components/page-layout/page-layout.component';
import { AuthGuardService } from 'src/app/shared-services/route-guards/auth-guard.service';
import { SidenavLayoutComponent } from 'src/app/root/components/sidenav-layout/sidenav-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavLayoutComponent,
    children: business.getBusinessRoutes(),
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: NonavLayoutComponent,
    children: fullPage.getFullPageLayoutRoute(),
  },
];

const routes2: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('../../layouts/top-nav/top-nav.module').then(m => m.TopNavModule),
  //   canActivate: [AuthGuardService]
  // },
  {
    path: '',
    loadChildren: () => import('../../layouts/side-nav/side-nav.module').then(m => m.SideNavModule),
    canActivate:[AuthGuardService]
  },
  {
    path: '',
    loadChildren: () => import('../../layouts/no-nav/no-nav.module').then(m => m.NoNavModule),
  }
]

export function getAppRoutes() {
  return routes2;
}
