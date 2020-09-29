import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../core/material.module';
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
