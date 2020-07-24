import { MaterialModule } from './../../shared/material.module';
import { DatachartModule } from './../../shared/datachart/datachart.module';
import { DatatableModule } from './../../shared/datatable/datatable.module';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DatachartModule,
    DatatableModule,
    ChartsModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
