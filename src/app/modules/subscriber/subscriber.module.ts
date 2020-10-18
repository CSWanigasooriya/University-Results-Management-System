import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberComponent } from './subscriber.component';



@NgModule({
  declarations: [SubscriberComponent],
  imports: [
    CommonModule,
    SubscriberRoutingModule
  ],
  exports: [
    SubscriberComponent
  ]
})
export class SubscriberModule { }
