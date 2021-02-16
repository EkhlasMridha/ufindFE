import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './components/sigin/sigin.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';
import { FormsMaterialModule } from '@material/forms-material.module';
import { AuthGuardService } from '@route-guards';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SiginComponent,
    data: {
      breadCrumb: 'SignIn',
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      breadCrumb: 'Password reset',
    },
    canActivate: [AuthGuardService],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      breadCrumb: 'Forgot password',
    },
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  declarations: [
    SiginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes),
    FormsMaterialModule,
  ],
})
export class AppAuthenticationModule { }
