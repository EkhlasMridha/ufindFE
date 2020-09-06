import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectionComponent } from './components/redirection/redirection.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared-modules/shared-materials/shared-material/shared-material.module';

const routes: Routes = [{ path: '', component: RedirectionComponent }];

@NgModule({
  declarations: [RedirectionComponent],
  imports: [CommonModule, SharedMaterialModule, RouterModule.forChild(routes)],
})
export class AppRedirectionPageModule {}
