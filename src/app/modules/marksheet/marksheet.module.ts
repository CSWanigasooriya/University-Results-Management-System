import { MaterialModule } from './../../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MarksheetRoutingModule
    ],
  exports: [
    MarksheetComponent
  ]
})
export class MarksheetModule { }
