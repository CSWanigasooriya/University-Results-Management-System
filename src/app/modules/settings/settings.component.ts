import { FirebaseService } from './../../services/firebase.service';
import { Component, AfterViewInit } from '@angular/core';
declare var M;
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit {
  selectedValue: string;
  hovered = false;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Coumputer Science' },
    { value: 'pizza-1', viewValue: 'Computer Engineering' },
    { value: 'tacos-2', viewValue: 'Computational Mathematics' }
  ];

  constructor(public auth: FirebaseService) {
  }

  ngAfterViewInit(): void {
    M.AutoInit();
  }

}
