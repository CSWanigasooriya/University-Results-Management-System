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
          this.groupedByStream.push(this.groupStream(result.filter(x => x.final !== '' && x.cas !== '')));
          this.groupedByMonth.push(this.groupMonth(result.filter(x => x.final !== '' && x.cas !== '')));
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
        break;
      case '02': return 'February';
        break;
      case '03': return 'March';
        break;
      case '04': return 'April';
        break;
      case '05': return 'May';
        break;
      case '06': return 'June';
        break;
      case '07': return 'July';
        break;
      case '08': return 'August';
        break;
      case '09': return 'September';
        break;
      case '10': return 'Octomber';
        break;
      case '11': return 'November';
        break;
      case '12': return 'December';
        break;
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

  print(event) {
    event.target.style.display = 'none';
    const printHtml = document.getElementById('printSection').outerHTML;
    const currentPage = document.body.innerHTML;
    const elementPage = '<html><head><title></title></head><body>' + printHtml + '</body>';
    document.body.innerHTML = elementPage;
    window.print();
    document.body.innerHTML = currentPage;
    location.reload();
  }

  getGrade(mark) {
    const finalMark = mark;
    if (finalMark <= 100 && finalMark >= 85) {
      return 'A+';
    } else if (finalMark < 85 && finalMark >= 75) {
      return 'A';
    } else if (finalMark < 75 && finalMark >= 70) {
      return 'A-';
    } else if (finalMark < 70 && finalMark >= 65) {
      return 'B+';
    } else if (finalMark < 65 && finalMark >= 60) {
      return 'B';
    } else if (finalMark < 60 && finalMark >= 55) {
      return 'B-';
    } else if (finalMark < 55 && finalMark >= 50) {
      return 'C+';
    } else if (finalMark < 50 && finalMark >= 45) {
      return 'C';
    } else if (finalMark < 45 && finalMark >= 40) {
      return 'C-';
    } else if (finalMark < 40 && finalMark >= 35) {
      return 'D+';
    } else {
      return 'Ie / Ia';
    }
  }
}
