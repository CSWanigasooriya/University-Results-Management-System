import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemesterRoutingModule } from './semester-routing.module';
import { SemesterComponent } from './semester.component';


@NgModule({
  declarations: [SemesterComponent],
  imports: [
    CommonModule,
    SemesterRoutingModule
  ]
})
export class SemesterModule { }
