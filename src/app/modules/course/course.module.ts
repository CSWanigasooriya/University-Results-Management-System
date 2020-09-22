import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CourseRoutingModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
