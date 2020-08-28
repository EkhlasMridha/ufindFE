import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, PLATFORM_ID } from '@angular/core';
import { RootRoutingModule } from '../root-routing/root-routing.module';
import { AppComponent } from './components/root-component/app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContentComponent } from './components/app-content/app-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DomainService } from '../shared-services/utilities/domain.service';
import { AppLoaderModule } from '../app-tools/app-loader/app-loader.module';

export function initializer(domainService: DomainService) {
  return () => {
    new Promise((resolve, reject) => {
      if (DomainService.domains) {
        resolve();
      }
    });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AppContentComponent,
    PageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppLoaderModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PLATFORM_ID, DomainService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
