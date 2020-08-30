import { MaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemesterRoutingModule } from './semester-routing.module';
import { SemesterComponent } from './semester.component';


@NgModule({
  declarations: [SemesterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SemesterRoutingModule
  ],
  exports: [
    SemesterComponent
  ]
})
export class SemesterModule { }
