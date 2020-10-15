import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { SqlService } from './../../services/sql.service';
declare var M;

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit, AfterViewInit {
  panelOpenState = true;
  groupedByMonth: any[] = [];
  groupedByIntake: any[] = [];
  groupedByStream: any[] = [];
  currentSemesterResults: any[] = [];
  chips = ['Previously Submited', 'Intake 36', 'Intake 35'];
  constructor(
    private apiService: SqlService,
    private auth: FirebaseService) {

  }

  async ngOnInit() {
    this.apiService.readResult().subscribe((result) => {
      this.groupedByIntake.push(this.groupIntake(result));
      result.forEach(res => {
        if (this.calculateDiff(res.lastUpdate) < 180) {
          this.groupedByStream.push(this.groupStream(result));
          this.groupedByMonth.push(this.groupMonth(result));
          this.currentSemesterResults.push(res.lastUpdate);
        }
      });
    });
  }

  ngAfterViewInit() {
    M.AutoInit();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.chips, event.previousIndex, event.currentIndex);
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

  getMonthName(int) {
    switch (int) {
      case '01': return 'January';
      case '02': return 'February';
      case '03': return 'March';
      case '04': return 'April';
      case '05': return 'May';
      case '06': return 'June';
      case '07': return 'July';
      case '08': return 'August';
      case '09': return 'September';
      case '10': return 'Octomber';
      case '11': return 'November';
      case '12': return 'December';
    }
  }

  groupMonth(myArray) {
    const groupKey = 0;
    const groups = myArray.reduce((r, o) => {
      const m = o.lastUpdate.split(('-'))[1];
      (r[m]) ? r[m].data.push(o) : r[m] = { group: m, data: [o] };
      return r;
    }, {});

    const result = Object.keys(groups).map((k) => groups[k]);
    return result;
  }

  groupIntake(myArray) {
    const groupKey = 0;
    const groups = myArray.reduce((r, o) => {
      const m: number = Number(o.st_id.split(('/'))[2]) + Number(17);
      (r[m]) ? r[m].data.push(o) : r[m] = { group: m, data: [o] };
      return r;
    }, {});

    const result = Object.keys(groups).map((k) => groups[k]);
    return result;
  }

  groupStream(myArray) {
    const groupKey = 0;
    const groups = myArray.reduce((r, o) => {
      const m = o.st_id.split(('/'))[1];
      (r[m]) ? r[m].data.push(o) : r[m] = { group: m, data: [o] };
      return r;
    }, {});

    const result = Object.keys(groups).map((k) => groups[k]);
    return result;
  }

  currentDate() {
    return new Date();
  }

  checkIntake(stream, intake, data) {
    const m: number = Number(data.st_id.split(('/'))[2]) + Number(17);
    const s = data.st_id.split(('/'))[1];
    if (m === intake && s === stream) {
      return data;
    }
  }

  print() {
    const printHtml = document.getElementById('printSection').outerHTML;
    const currentPage = document.body.innerHTML;
    const elementPage = '<html><head><title></title></head><body>' + printHtml + '</body>';
    document.body.innerHTML = elementPage;
    window.print();
    document.body.innerHTML = currentPage;
    location.reload();
  }
}
