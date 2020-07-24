import { FirebaseService } from './../../services/firebase.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  providers: [
    FirebaseService
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
