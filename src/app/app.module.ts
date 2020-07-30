import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ErrorpageModule } from './shared/errorpage/errorpage.module';
import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { MaterialModule } from './shared/material.module';
import { ModalModule } from './shared/modal/modal.module';
import { HomeModule } from './modules/home/home.module';
import { FirebaseService } from './services/firebase.service';
import { LoginModule } from './modules/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './shared/modal/modal.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    HomeModule,
    ErrorpageModule,
    ModalModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [FirebaseService, AngularFireAuthGuard,
     { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
