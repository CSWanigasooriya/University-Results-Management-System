import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LecturerRoutingModule } from './lecturer-routing.module';
import { LecturerComponent } from './lecturer.component';



@NgModule({
  declarations: [LecturerComponent],
  imports: [
    CommonModule,
    LecturerRoutingModule
  ]
})
export class LecturerModule { }
