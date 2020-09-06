import { Routes } from '@angular/router';
import { DomainService } from '../shared-services/utilities/domain.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app-redirection-page/app-redirection-page.module').then(
        (m) => m.AppRedirectionPageModule
      ),
    data: {
      breadCrumb: 'Dashboard',
    },
  },
];

export function getBusinessRoutes() {
  return routes;
}
