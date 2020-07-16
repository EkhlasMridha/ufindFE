import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectionComponent } from './components/redirection/redirection.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RedirectionComponent }];

@NgModule({
  declarations: [RedirectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppRedirectionPageModule {}
