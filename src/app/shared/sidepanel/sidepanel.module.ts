import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidepanelRoutingModule } from './sidepanel-routing.module';
import { SidepanelComponent } from './sidepanel.component';


@NgModule({
  declarations: [SidepanelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidepanelRoutingModule
  ],
  exports: [
    SidepanelComponent
  ]
})
export class SidepanelModule { }
