import { Component } from '@angular/core';
import { SqlService } from 'src/app/services/sql.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  hide = {
    report: false,
  };
  groupedByIntake: any[] = [];
  groupedByModule: any[] = [];
  constructor(
    private apiService: SqlService
  ) {
    this.apiService.readResult().subscribe(res => {
      this.groupedByIntake.push(this.groupIntake(res));
      this.groupedByModule.push(this.groupModule(res));
    });
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

  groupModule(myArray: any[]) {
    const groupKey = 0;
    const groups = myArray.reduce((r, o) => {
      const m = o.mod_id;
      (r[m]) ? r[m].data.push(o) : r[m] = { group: m, data: [o] };
      return r;
    }, {});

    const result = Object.keys(groups).map((k) => groups[k]);
    return result;

  }
}
