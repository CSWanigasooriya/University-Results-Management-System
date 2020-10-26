import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SqlService } from 'src/app/services/sql.service';
import * as Highcharts from 'highcharts';
import Bellcurve from 'highcharts/modules/histogram-bellcurve';
Bellcurve(Highcharts);
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  hide = {
    report: false,
  };
  checked = true;
  SESampleValues: any[] = [];
  CSSampleValues: any[] = [];
  CESampleValues: any[] = [];
  SEsd: number;
  CSsd: number;
  CEsd: number;
  SEmean: number;
  CSmean: number;
  CEmean: number;
  module = new FormControl('', Validators.required);
  intake = new FormControl('', Validators.required);
  index = new FormControl('', Validators.required);
  groupedByIntake: any[] = [];
  groupedByModule: any[] = [];
  results: any[] = [];

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  SEchartOptions: Highcharts.Options = {
    title: {
      text: 'Software Engineering'
    },
    xAxis: [{
      title: { text: 'Data' },
      alignTicks: false
    }, {
      title: { text: 'Marks' },
      alignTicks: false,
      opposite: true
    }],

    yAxis: [{
      title: { text: 'Data' }
    }, {
      title: { text: 'Z-Score' },
      opposite: true
    }],

    series: [{
      name: 'Histogram',
      type: 'bellcurve',
      xAxis: 1,
      yAxis: 1,
      baseSeries: 's1',
      zIndex: -1
    }, {
      name: 'Data',
      type: 'scatter',
      data: this.SESampleValues,
      visible: false,
      id: 's1',
      marker: {
        radius: 1.5
      }
    }]
  }; // required

  CEchartOptions: Highcharts.Options = {
    title: {
      text: 'Computer Engineering'
    },
    xAxis: [{
      title: { text: 'Data' },
      alignTicks: false
    }, {
      title: { text: 'Marks' },
      alignTicks: false,
      opposite: true
    }],

    yAxis: [{
      title: { text: 'Data' }
    }, {
      title: { text: 'Z-Score' },
      opposite: true
    }],

    series: [{
      name: 'Histogram',
      type: 'bellcurve',
      xAxis: 1,
      yAxis: 1,
      baseSeries: 's1',
      zIndex: -1
    }, {
      name: 'Data',
      type: 'scatter',
      data: this.CESampleValues,
      visible: false,
      id: 's1',
      marker: {
        radius: 1.5
      }
    }]
  };

  CSchartOptions: Highcharts.Options = {
    title: {
      text: 'Computer Science'
    },
    xAxis: [{
      title: { text: 'Data' },
      alignTicks: false
    }, {
      title: { text: 'Marks' },
      alignTicks: false,
      opposite: true
    }],

    yAxis: [{
      title: { text: 'Data' }
    }, {
      title: { text: 'Z-Score' },
      opposite: true
    }],

    series: [{
      name: 'Histogram',
      type: 'bellcurve',
      xAxis: 1,
      yAxis: 1,
      baseSeries: 's1',
      zIndex: -1
    }, {
      name: 'Data',
      type: 'scatter',
      data: this.CSSampleValues,
      visible: false,
      id: 's1',
      marker: {
        radius: 1.5
      }
    }]
  };
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false

  lineChartOptions = {
    scales: {
      yAxes: [{
        // stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Number of Students'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        // stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Z-Score'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true
  };

  // LineChart
  lineChartData: ChartDataSets[] =
    [
      { data: this.SESampleValues, label: 'SE' },
      { data: this.CSSampleValues, label: 'CS' },
      { data: this.CESampleValues, label: 'CE' }
    ];

  lineChartLabels: Label[] =
    ['-3', '-2', '-1', '0', '1', '2', '3'];

  lineChartColors: Color[] = [
    {
      backgroundColor: [
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(255, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)',
        'rgba(255,0,0,1)'
      ],
      borderWidth: 2
    },
    {
      backgroundColor: [
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)',
        'rgba(255, 168, 38, 0.2)'

      ],
      borderColor: [
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)',
        'rgba(255, 168, 38, 1)'
      ],
      borderWidth: 2
    },
    {
      backgroundColor: [
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)',
        'rgba(39, 152, 45, 0.2)'
      ],
      borderColor: [
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)',
        'rgba(39, 152, 45, 1)'
      ],
      borderWidth: 2
    }
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
      this.groupedByIntake.push(this.groupIntake(res.filter(async x => x.mod_id === this.module.value)));
      this.groupedByModule.push(this.groupModule(res.filter(async x => x.mod_id === this.module.value)));
    });
  }

  ngOnInit() {
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

  calcParams() {
    this.hide.report = !this.hide.report;
    // this.groupedByIntake[0].map(val => );
    this.groupedByIntake[0].map(x => {
      x.data.map(val => {
        const m = val.st_id.split(('/'))[1];
        if (m === 'BSE') {
          this.SESampleValues.push(+val.final);
        }
        if (m === 'BCS') {
          this.CSSampleValues.push(+val.final);
        }
        if (m === 'BCE') {
          this.CESampleValues.push(+val.final);
        }
      });
    })
    this.SEsd = this.standardDeviation(this.SESampleValues);
    this.CSsd = this.standardDeviation(this.CSSampleValues);
    this.CEsd = this.standardDeviation(this.CESampleValues);
    this.SEmean = this.average(this.SESampleValues);
    this.CSmean = this.average(this.CSSampleValues);
    this.CEmean = this.average(this.CESampleValues);
  }

  standardDeviation(array): number {
    var avg = this.average(array);
    var squareDiffs = array.map(value => {
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });

    var avgSquareDiff = this.average(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }

  average(array): number {
    var sum = array.reduce((sum, value) => {
      return sum + value;
    }, 0);

    var avg = sum / array.length;
    return avg;
  }
}
