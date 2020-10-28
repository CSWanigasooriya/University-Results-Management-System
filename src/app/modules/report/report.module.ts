import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { DatachartModule } from 'src/app/shared/datachart/datachart.module';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    ReportComponent  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    HighchartsChartModule,
    MaterialModule,
    DatachartModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    ReportComponent
  ]
})
export class ReportModule { }
