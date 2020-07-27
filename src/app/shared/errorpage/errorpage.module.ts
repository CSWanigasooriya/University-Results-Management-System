import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorpageRoutingModule } from './errorpage-routing.module';
import { ErrorpageComponent } from './errorpage.component';


@NgModule({
  declarations: [ErrorpageComponent],
  imports: [
    CommonModule,
    ErrorpageRoutingModule
  ],
  exports: [
    ErrorpageComponent
  ]
})
export class ErrorpageModule { }
