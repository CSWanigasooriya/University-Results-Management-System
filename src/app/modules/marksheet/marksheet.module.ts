import { DatachartModule } from './../../shared/datachart/datachart.module';
import { DatatableModule } from './../../shared/datatable/datatable.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarksheetRoutingModule } from './marksheet-routing.module';
import { MarksheetComponent } from './marksheet.component';


@NgModule({
  declarations: [
    MarksheetComponent
  ],
  imports: [
    CommonModule,
    DatatableModule,
    DatachartModule,
    MarksheetRoutingModule
  ],
  exports: [
    MarksheetComponent
  ]
})
export class MarksheetModule { }
