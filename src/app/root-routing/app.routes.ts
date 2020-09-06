import { Routes } from '@angular/router';

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
      breadcrumb: 'Dashboard',
    },
  },
];

export function getBusinessRoutes() {
  return routes;
}
