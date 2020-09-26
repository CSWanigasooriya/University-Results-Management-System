import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { SqlService } from './../../services/sql.service';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {

  panelOpenState = false;
  result: any[] = [];
  semester: any[] = [];

  constructor(
    private apiService: SqlService,
    private auth: FirebaseService) {

  }

  async ngOnInit() {

  }

  calculateDate(dateSent) {
    dateSent = new Date(dateSent);
    return dateSent.getDate();
  }

  calculateYear(dateSent) {
    dateSent = new Date(dateSent);
    return dateSent.getFullYear();
  }

  calculateMonth(dateSent) {
    dateSent = new Date(dateSent);
    return dateSent.getMonth() + 1;
  }

  calculateDiff(dateSent) {
    const currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
      - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()))
      / (1000 * 60 * 60 * 24));
  }
}
