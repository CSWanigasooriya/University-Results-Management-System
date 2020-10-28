import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberComponent } from './subscriber.component';



@NgModule({
  declarations: [SubscriberComponent],
  imports: [
    CommonModule,
    FormsModule,
    SubscriberRoutingModule
  ],
  exports: [
    SubscriberComponent
  ]
})
export class SubscriberModule { }
