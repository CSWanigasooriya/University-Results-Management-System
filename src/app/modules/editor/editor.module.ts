import { DatatableModule } from './../../shared/datatable/datatable.module';
import { DatachartModule } from './../../shared/datachart/datachart.module';
import { MaterialModule } from '../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';


@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    DatatableModule,
    DatachartModule,
    MaterialModule,
    EditorRoutingModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
