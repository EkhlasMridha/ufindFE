import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoNavComponent } from './components/no-nav/no-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as fullpage from "../../root-routing/full-page.routes";

const routes: Routes = [
  {path:'',component:NoNavComponent,children:fullpage.getFullPageLayoutRoute()}
]

@NgModule({
  declarations: [NoNavComponent, ContentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class NoNavModule { }
