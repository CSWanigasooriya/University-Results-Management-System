import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SqlService } from 'src/app/services/sql.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  students: any[] = [];
  constructor(
    public auth: FirebaseService,
    private apiService: SqlService) { }

  ngOnInit(): void {
    this.apiService.readStudents().subscribe(stud => {
      stud.forEach(val => {
        this.students.push(val);
      });
    });
  }

  groupModule(myArray: any[]) {
    const groupKey = 0;
    const groups = myArray.reduce((r, o) => {
      const m = o.mod_id;
      this.apiService.readResult().subscribe(res => {
        res.forEach(elem => {

        });
      });
      (r[m]) ? r[m].data.push(o) : r[m] = { group: m, data: [o] };
      return r;
    }, {});

    const result = Object.keys(groups).map((k) => groups[k]);
    return result;

  }
}
