import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolvedComponent } from './components/solved/solved.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';

const routes: Routes = [
  {
    path: '',
    component: SolvedComponent,
    data: {
      breadCrumb: ''
    }
  }
];

@NgModule({
  declarations: [SolvedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
  ]
})
export class AppSolvedcaseModule { }
