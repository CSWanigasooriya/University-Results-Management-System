import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DutyRoutingModule } from './duty-routing.module';
import { DutyComponent } from './duty.component';


@NgModule({
  declarations: [DutyComponent],
  imports: [
    CommonModule,
    DutyRoutingModule
  ]
})
export class DutyModule { }
