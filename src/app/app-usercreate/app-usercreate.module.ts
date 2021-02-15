import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercreateComponent } from './components/usercreate/usercreate.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';

const routes: Routes = [
  {
    path: '',
    component: UsercreateComponent,
    data: {
      breadCrumb: ''
    }
  }
];

@NgModule({
  declarations: [UsercreateComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class AppUsercreateModule { }
