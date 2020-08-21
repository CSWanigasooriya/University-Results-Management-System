import { MaterialModule } from '../../core/material.module';
import { ModalComponent } from './modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalRoutingModule,
    MaterialModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
