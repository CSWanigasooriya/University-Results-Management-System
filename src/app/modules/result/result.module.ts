import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';



@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ResultRoutingModule
  ],
  exports: [
    ResultComponent
  ]
})
export class ResultModule { }
