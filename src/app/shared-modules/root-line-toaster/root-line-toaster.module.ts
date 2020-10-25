import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLineToasterComponent } from './components/root-line-toaster/root-line-toaster.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RootLineToasterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule
  ],
})
export class RootLineToasterModule { }
