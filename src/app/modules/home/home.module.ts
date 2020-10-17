import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LecturerModule } from '../lecturer/lecturer.module';
import { MarksEditModule } from './../../shared/marks-edit/marks-edit.module';
import { SidepanelModule } from './../../shared/sidepanel/sidepanel.module';
import { CourseModule } from './../course/course.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { DutyModule } from './../duty/duty.module';
import { EditorModule } from './../editor/editor.module';
import { MarksheetModule } from './../marksheet/marksheet.module';
import { ReportModule } from './../report/report.module';
import { SemesterModule } from './../semester/semester.module';
import { SettingsModule } from './../settings/settings.module';
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
    SettingsModule,
    MarksEditModule,
    LecturerModule,
    ReportModule,
    DutyModule,
    CourseModule,
    SemesterModule,
    EditorModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
