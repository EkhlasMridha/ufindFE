import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';
import { RootLineToasterModule } from '../shared-modules/root-line-toaster/root-line-toaster.module';
import { FormsMaterialModule } from '@material/forms-material.module';
import { PoliceDashboardComponent } from './components/police-dashboard/police-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadCrumb: '',
    },
  },
];

@NgModule({
  declarations: [HomeComponent, PoliceDashboardComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    ConfirmationStatusModalModule.forChild({
      modalWidth: '500px',
    }),
    RouterModule.forChild(routes),
    RootLineToasterModule
  ],
})
export class AppDashboardModule { }
