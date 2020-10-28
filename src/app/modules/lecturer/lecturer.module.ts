import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material.module';
import { LecturerRoutingModule } from './lecturer-routing.module';
import { LecturerComponent } from './lecturer.component';



@NgModule({
  declarations: [LecturerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LecturerRoutingModule
  ],
  exports: [
    LecturerComponent
  ]
})
export class LecturerModule { }
