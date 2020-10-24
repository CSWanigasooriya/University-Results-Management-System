import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MailService } from 'src/app/services/mail.service';
import { SqlService } from 'src/app/services/sql.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  studentID;
  results: any[] = [];
  totalGPA: any[] = [];
  loopend;
  constructor(
    public auth: FirebaseService,
    private apiService: SqlService,
    private mail: MailService) { }

  ngOnInit(): void {
    this.apiService.readStudents().subscribe(stud => {
      this.auth.user$.subscribe(user => {
        stud.forEach(val => {
          if (val.uid === user.uid) {
            this.apiService.readResult().subscribe(res => {
              res.forEach(elem => {
                if (elem.st_id === val.std_id) {
                  this.results.push(elem);
                }
              });
            });
          }
        });
      });
    });
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

  getModuleName(modID) {
    this.apiService.readModule().subscribe(res => {
      res.filter(x => {
        if (x.mod_id === modID) {
          return x.mod_name;
        }
      });
    });
  }

  getGPV(mark) {
    const grade = this.getGrade(mark);

    switch (grade) {
      case 'A+': return 4.2;
      case 'A': return 4.0;
      case 'A-': return 3.7;
      case 'B+': return 3.3;
      case 'B': return 3.0;
      case 'B-': return 2.7;
      case 'C+': return 2.3;
      case 'C': return 2.0;
      case 'C-': return 1.7;
      case 'D+': return 1.0;
      default: return 0;
    }
  }

  getGPA(cid, gpv) {
    // const d = Number(cid.charAt(cid.length - 1));
    // if (Number(gpv) === 0) {
    //   this.totalGPA.push(0);
    // } else {
    //   this.totalGPA.push(Number(gpv) * d);
    // }
    // this.loopend = true;
  }

  calcGPA() {
    // if (this.loopend) {
    //   return this.totalGPA.reduce((c, n) => (c + n)) / this.totalGPA.length;
    // }
  }

  email() {
    this.mail.sendEmail('Hello', 'Test Mail');
  }
}
