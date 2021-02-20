import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { SharedMaterialModule } from '@material/shared-material.module';
import { FormsMaterialModule } from '@material/forms-material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    data: {
      breadCrumb: ''
    }
  }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AppSettingsModule { }
