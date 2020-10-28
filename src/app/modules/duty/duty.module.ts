import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DutyRoutingModule } from './duty-routing.module';
import { DutyComponent } from './duty.component';


@NgModule({
  declarations: [DutyComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DutyRoutingModule
  ],
  exports: [
    DutyComponent
  ]
})
export class DutyModule { }
