import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './components/sigin/sigin.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';
import { FormsMaterialModule } from '../shared-modules/shared-materials/forms-material/forms-material.module';
import { AuthGuardService } from '../shared-services/route-guards/auth-guard.service';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

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
    path: 'signup',
    component: SignupComponent,
    data: {
      breadCrumb: 'SignUp',
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
];

@NgModule({
  declarations: [SiginComponent, SignupComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes),
    FormsMaterialModule,
  ],
})
export class AppAuthenticationModule {}
