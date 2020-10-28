import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../core/material.module';
import { DatachartModule } from './../../shared/datachart/datachart.module';
import { DatatableModule } from './../../shared/datatable/datatable.module';
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
