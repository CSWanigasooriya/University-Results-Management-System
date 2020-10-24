import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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
  checked = true;
  module = new FormControl('', Validators.required);
  intake = new FormControl('', Validators.required);
  index = new FormControl('', Validators.required);
  groupedByIntake: any[] = [];
  groupedByModule: any[] = [];
  results: any[] = [];


  // LineChart
  lineChartData: ChartDataSets[] =
    [
      { data: Array.from({length: 40}, () => Math.floor(Math.random() * 40)), label: 'Crude oil prices' },
      { data: Array.from({length: 40}, () => Math.floor(Math.random() * 40)), label: 'Crude oil' }
    ];

  lineChartLabels: Label[] =
    ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions =
    {
      responsive: true,
    };

  lineChartColors: Color[] =
    [
      {
        // borderColor: 'rgba(255,0,0,1)'
        // backgroundColor: 'rgba(255, 0, 0, 0.2)',
      },
    ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  constructor(
    private apiService: SqlService
  ) {
    this.apiService.readResult().subscribe(res => {
      res.forEach(val => {
        this.results.push(val);
      });
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
