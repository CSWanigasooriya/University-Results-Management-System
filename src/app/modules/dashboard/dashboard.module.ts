import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';
import { DatachartModule } from './../../shared/datachart/datachart.module';
import { DatatableModule } from './../../shared/datatable/datatable.module';
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
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
