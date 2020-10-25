import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { ConfirmationStatusModalModule } from '../shared-modules/confirmation-status-modal/confirmation-status-modal.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { RootLineToasterModule } from '../shared-modules/root-line-toaster/root-line-toaster.module';
import { RootLineToasterService } from '../shared-modules/root-line-toaster/services/root-line-toaster.service';

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
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HttpClientModule,
    ConfirmationStatusModalModule.forChild({
      modalWidth: '500px',
    }),
    RouterModule.forChild(routes),
    RootLineToasterModule
  ],
  providers:[RootLineToasterService]
  // providers: [
  //   ToastrService,
  //   {
  //     provide: TOAST_CONFIG,
  //     useValue: true,
  //   },
  // ],
})
export class AppDashboardModule {}
