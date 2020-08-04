import { SettingsModule } from './../settings/settings.module';
import { MarksEditModule } from './../../shared/marks-edit/marks-edit.module';
import { ReportModule } from './../report/report.module';
import { MarksheetModule } from './../marksheet/marksheet.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { SidepanelModule } from './../../shared/sidepanel/sidepanel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SidepanelModule,
    DashboardModule,
    MarksheetModule,
    SidepanelModule,
    SettingsModule,
    MarksEditModule,
    ReportModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
