import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';



@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  exports: [
    ResultComponent
  ]
})
export class ResultModule { }
