import { MaterialModule } from './../../shared/material.module';
import { DatachartModule } from './../../shared/datachart/datachart.module';
import { DatatableModule } from './../../shared/datatable/datatable.module';
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
    DatatableModule,
    DatachartModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
