import { MaterialModule } from '../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatachartRoutingModule } from './datachart-routing.module';
import { DatachartComponent } from './datachart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DatachartComponent],
  imports: [
    CommonModule,
    DatachartRoutingModule,
    ChartsModule,
    MaterialModule
  ],
  exports: [
    DatachartComponent
  ]
})
export class DatachartModule { }
