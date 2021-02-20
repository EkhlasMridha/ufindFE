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
    },
    canActivateChild: [AuthGuardService]
  },
  {
    path: 'user-create',
    loadChildren: () => import('../app-usercreate/app-usercreate.module').then((module) => module.AppUsercreateModule),
    data: {
      breadCrumb: "Create user"
    },
    canActivateChild: [AuthGuardService]
  },
  {
    path: "settings",
    loadChildren: () => import("../app-settings/app-settings.module").then(module => module.AppSettingsModule),
    data: {
      breadCrumb: "Settings"
    },
    canActivateChild: [AuthGuardService]
  }
];

export function getBusinessRoutes() {
  return routes;
}
