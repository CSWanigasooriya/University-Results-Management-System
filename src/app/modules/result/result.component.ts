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
  allModules: any[] = [];
  results: any[] = [];
  totalGPA: any[] = [];
  finalGPA = 0;
  totalCredit = 0;
  constructor(
    public auth: FirebaseService,
    private apiService: SqlService,
    private mail: MailService) { }

  ngOnInit(): void {
    this.apiService.readModule().subscribe(res => {
      res.forEach(val => {
        this.allModules.push(val);
      });
    });
    this.apiService.readStudents().subscribe(stud => {
      this.auth.user$.subscribe(user => {
        stud.forEach(val => {
          if (val.uid === user.uid) {
            this.apiService.readResult().subscribe(res => {
              res.forEach(elem => {
                if (elem.st_id === val.std_id) {
                  this.studentID = elem.st_id;
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
    for (const val of this.allModules) {
      if (val.mod_id === modID) {
        return val.mod_name;
        break;
      }
    }
  }

  getGPV(mark) {
    const grade = this.getGrade(mark);

    switch (grade) {
      case 'A+': return 4.2;
        break;
      case 'A': return 4.0;
        break;
      case 'A-': return 3.7;
        break;
      case 'B+': return 3.3;
        break;
      case 'B': return 3.0;
        break;
      case 'B-': return 2.7;
        break;
      case 'C+': return 2.3;
        break;
      case 'C': return 2.0;
        break;
      case 'C-': return 1.7;
        break;
      case 'D+': return 1.0;
        break;
      default: return 0;
        break;
    }
  }

  email() {
    this.mail.sendEmail('Hello', 'Test Mail');
  }
}
