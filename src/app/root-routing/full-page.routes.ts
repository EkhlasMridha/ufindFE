import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app-authentication/app-authentication.module').then(
        (module) => module.AppAuthenticationModule
      ),
  },
];

export function getFullPageLayoutRoute() {
  return routes;
}
