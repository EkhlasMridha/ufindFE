import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import * as nav from "../../root-routing/app.routes"

const routes: Routes = [
  {path:'',component:TopNavComponent,children:nav.getBusinessRoutes()}
]

@NgModule({
  declarations: [TopNavComponent, ContentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
})
export class TopNavModule { }
