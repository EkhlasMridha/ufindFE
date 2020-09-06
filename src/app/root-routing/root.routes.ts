import { Routes } from '@angular/router';
import * as auth from './auth.routes';
import * as business from './app.routes';
import { NonavLayoutComponent } from '../root/components/nonav-layout/nonav-layout.component';
import { PageLayoutComponent } from '../root/components/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: business.getBusinessRoutes(),
  },
  {
    path: '',
    component: NonavLayoutComponent,
    loadChildren: () => auth.getAuthModule(),
  },
];

export function getAppRoutes() {
  return routes;
}
