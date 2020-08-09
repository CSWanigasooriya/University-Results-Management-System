import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DropzoneDirective } from './../../shared/dropzone/dropzone.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UploaderComponent } from 'src/app/shared/dropzone/uploader.component';
import { UploadTaskComponent } from 'src/app/shared/dropzone/upload-task.component';



@NgModule({
  declarations: [SettingsComponent, UploaderComponent, UploadTaskComponent, DropzoneDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
