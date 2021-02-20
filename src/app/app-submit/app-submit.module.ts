import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitComponent } from './components/submit/submit.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '@material/shared-material.module';
import { FormsMaterialModule } from '@material/forms-material.module';
import { RootlineDialogModule } from "@rootline-dialog";

const routes: Routes = [
  {
    path: '',
    component: SubmitComponent,
    data: {
      breadCrumb: ''
    }
  }
];

@NgModule({
  declarations: [SubmitComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsMaterialModule,
    RouterModule.forChild(routes),
    RootlineDialogModule.forChild({
      modalWidth: "500px"
    })
  ]
})
export class AppSubmitModule { }
