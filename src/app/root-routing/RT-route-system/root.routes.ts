import { Routes } from '@angular/router';
import * as fullPage from '../full-page.routes';
import * as business from '../app.routes';
import { NonavLayoutComponent } from '../../root/components/nonav-layout/nonav-layout.component';
import { PageLayoutComponent } from '../../root/components/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: business.getBusinessRoutes(),
  },
  {
    path: '',
    component: NonavLayoutComponent,
    children: fullPage.getFullPageLayoutRoute(),
  },
];

export function getAppRoutes() {
  return routes;
}
