import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { DatatableComponent } from './shared/datatable/datatable.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MaterialModule } from './shared/material.module';
import { ErrorpageModule } from './shared/errorpage/errorpage.module';
import { ModalModule } from './shared/modal/modal.module';
import { HomeModule } from './modules/home/home.module';
import { FirebaseService } from './services/firebase.service';
import { LoginModule } from './modules/login/login.module';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';


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
    ModalModule,
    MaterialModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
