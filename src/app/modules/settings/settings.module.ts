import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    SettingsRoutingModule
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
