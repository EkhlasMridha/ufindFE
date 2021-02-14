import { Routes } from '@angular/router';
import { AuthGuardService } from '@route-guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app-dashboard/app-dashboard.module').then(
        (module) => module.AppDashboardModule
      ),
    data: {
      breadCrumb: 'Dashboard',
    },
    canActivateChild: [AuthGuardService],
  },
  {
    path: "submit-case",
    loadChildren: () => import("../app-submit/app-submit.module").then((module) => module.AppSubmitModule),
    data: {
      breadCrumb: "Submit case"
    }
  }
];

export function getBusinessRoutes() {
  return routes;
}
