import { ExcelService } from './services/excel.service';
import { EditorGuard } from './core/editor.guard';
import { AdminGuard } from './core/admin.guard';
import { SqlService } from './services/sql.service';
import { APP_CONFIG, AppConfig } from './interfaces/app.config';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ErrorpageModule } from './shared/errorpage/errorpage.module';
import { FooterModule } from './shared/footer/footer.module';
import { HeaderModule } from './shared/header/header.module';
import { MaterialModule } from './core/material.module';
import { ModalModule } from './shared/modal/modal.module';
import { HomeModule } from './modules/home/home.module';
import { FirebaseService } from './services/firebase.service';
import { LoginModule } from './modules/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './shared/modal/modal.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SubscriberGuard } from './core/subscriber.guard';
import { AuthGuard } from './core/auth.guard';

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
  providers: [FirebaseService, AngularFireAuthGuard, SqlService, ExcelService, AdminGuard, EditorGuard, SubscriberGuard, AuthGuard,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    { provide: APP_CONFIG, useValue: AppConfig }],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
