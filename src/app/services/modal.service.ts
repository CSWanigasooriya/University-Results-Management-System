import { APP_CONFIG, AppConfig } from './../interfaces/app.config';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(@Inject(APP_CONFIG) private config: AppConfig) { }
}
