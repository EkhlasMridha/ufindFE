import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';
import { RootLineToasterModule } from '../shared-modules/root-line-toaster/root-line-toaster.module';
import { FormsMaterialModule } from '@material/forms-material.module';
import { PoliceDashboardComponent } from './components/police-dashboard/police-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { FindModalComponent } from './modals/find-modal/find-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

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
  declarations: [HomeComponent, PoliceDashboardComponent, AdminComponent, FindModalComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    ConfirmationStatusModalModule.forChild({
      modalWidth: '500px',
    }),
    RouterModule.forChild(routes),
    MatDialogModule,
    RootLineToasterModule
  ],
})
export class AppDashboardModule { }
