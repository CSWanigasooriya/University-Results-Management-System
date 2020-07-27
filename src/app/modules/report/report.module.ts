import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ReportComponent
  ]
})
export class ReportModule { }
