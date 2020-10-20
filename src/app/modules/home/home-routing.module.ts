import { EditorGuard } from './../../core/editor.guard';
import { AdminGuard } from './../../core/admin.guard';
import { SubscriberComponent } from './../subscriber/subscriber.component';
import { EditorComponent } from './../editor/editor.component';
import { DutyComponent } from './../duty/duty.component';
import { DepartmentComponent } from './../department/department.component';
import { ResultComponent } from './../result/result.component';
import { SemesterComponent } from './../semester/semester.component';
import { CourseComponent } from './../course/course.component';
import { LecturerComponent } from './../lecturer/lecturer.component';
import { StudentComponent } from './../student/student.component';
import { SettingsComponent } from './../settings/settings.component';
import { ReportComponent } from './../report/report.component';
import { MarksheetComponent } from './../marksheet/marksheet.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberGuard } from 'src/app/core/subscriber.guard';
import { OverviewComponent } from '../overview/overview.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'admin', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'marksheet', component: MarksheetComponent },
      { path: 'report', component: ReportComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'student', component: StudentComponent },
      { path: 'lecturer', component: LecturerComponent },
      { path: 'course', component: CourseComponent },
      { path: 'semster', component: SemesterComponent },
      { path: 'result', component: ResultComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'duty', component: DutyComponent },
      { path: 'overview', component: OverviewComponent },
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: './**' }
    ]
    , canActivate: [AdminGuard]
  },
  {
    path: 'editor', component: HomeComponent,
    children: [
      { path: 'dashboard', component: EditorComponent },
      { path: 'marksheet', component: MarksheetComponent },
      { path: 'report', component: ReportComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'student', component: StudentComponent },
      { path: 'lecturer', component: LecturerComponent },
      { path: 'course', component: CourseComponent },
      { path: 'semster', component: SemesterComponent },
      { path: 'result', component: ResultComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'duty', component: DutyComponent },
      { path: 'overview', component: OverviewComponent },
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: './**' }
    ],
    canActivate: [EditorGuard]
  },

  {
    path: 'subscriber', component: HomeComponent,
    children: [
      { path: 'dashboard', component: SubscriberComponent },
      { path: 'marksheet', component: MarksheetComponent },
      { path: 'report', component: ReportComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'student', component: StudentComponent },
      { path: 'lecturer', component: LecturerComponent },
      { path: 'course', component: CourseComponent },
      { path: 'semster', component: SemesterComponent },
      { path: 'result', component: ResultComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'duty', component: DutyComponent },
      { path: 'overview', component: OverviewComponent },
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: './**' }
    ],
    canActivate: [SubscriberGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
