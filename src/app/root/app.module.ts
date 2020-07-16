import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from '../root-routing/root-routing.module';
import { AppComponent } from './components/root-component/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContentComponent } from './components/app-content/app-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, AppContentComponent, PageLayoutComponent],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
