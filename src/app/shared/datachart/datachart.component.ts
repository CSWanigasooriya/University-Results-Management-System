import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { FirebaseService } from './../../services/firebase.service';
import { SqlService } from './../../services/sql.service';
@Component({
  selector: 'app-datachart',
  templateUrl: './datachart.component.html',
  styleUrls: ['./datachart.component.scss']
})
export class DatachartComponent implements OnInit {
  @Input() type: string;
  @Input() module: string;
  numberofstudents = 0;
  computerScience: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  computerEngineering: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  softwareEngineering: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  groupedByModule: any[] = [];
  constructor(
    private apiService: SqlService,
    private auth: FirebaseService) {
  }

  // Barchart
  public barChartOptions = {
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
          labelString: 'Marks'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Label[] = ['0 < 25', '25 < 35', '35 < 45', '45 < 55', '55 < 65', '65 < 75', '75 < 85', '85 < 100'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      // data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)),
      data: this.computerScience,
      label: 'CS'
    },
    {
      // data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)),
      data: this.softwareEngineering,
      label: 'SE'
    },
    {
      // data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)),
      data: this.computerEngineering,
      label: 'CE'
    }
  ];
  public barChartColors: Color[] = [
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


  // LineChart
  lineChartData: ChartDataSets[] =
    this.barChartData;
  // [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  //   { data: [90, 13, 23, 65, 34, 12], label: 'Crude oil' }
  // ];

  lineChartLabels: Label[] =
    this.barChartLabels;
  // ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions =
    this.barChartOptions;
  // {
  //   responsive: true,
  // };

  lineChartColors: Color[] =
    this.barChartColors;
  // [
  //   {
  //     // borderColor: 'rgba(255,0,0,1)'
  //     // backgroundColor: 'rgba(255, 0, 0, 0.2)',
  //   },
  // ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  // Piechart
  public pieChartLabels: Label[] =
    // this.barChartLabels;
    ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData =
    // this.barChartData;
    [120, 150, 180, 90];
  public pieChartType = 'pie';


  // Radarchart
  public radarChartLabels = this.barChartLabels;
  // ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = this.barChartData;
  //  [
  //   { data: [120, 130, 180, 70], label: '2017' },
  //   { data: [90, 150, 200, 45], label: '2018' }
  // ];
  public radarChartType = 'radar';

  // Doughnut
  public doughnutChartLabels =
    //  this.barChartLabels;
    ['CNM', 'DSA', 'OOP', 'PS'];
  public doughnutChartData =
    // this.barChartData;
    [120, 150, 180, 90];

  public doughnutChartColors = '';
  public doughnutChartType = 'doughnut';

  async ngOnInit() {
    await this.apiService.readResult().subscribe(res => {
      res.forEach(val => {
        this.sortStreamMarks(val);
      });
    });
  }

  sortStreamMarks(val) {
    if (val.mod_id === this.module) {
      const m = val.st_id.split(('/'))[1];
      if (m === 'BSE') {
        if (Number(val.final) < 26) {
          this.softwareEngineering[0]++;
        }
        if (Number(val.final) < 36) {
          this.softwareEngineering[1]++;
        }
        if (Number(val.final) < 46) {
          this.softwareEngineering[2]++;
        }
        if (Number(val.final) < 56) {
          this.softwareEngineering[3]++;
        }
        if (Number(val.final) < 66) {
          this.softwareEngineering[4]++;
        }
        if (Number(val.final) < 76) {
          this.softwareEngineering[5]++;
        }
        if (Number(val.final) < 86) {
          this.softwareEngineering[6]++;
        }
        if (Number(val.final) < 100) {
          this.softwareEngineering[7]++;
        }
      }
      if (m === 'BCS') {
        if (Number(val.final) < 26) {
          this.computerScience[0]++;
        }
        if (Number(val.final) < 36) {
          this.computerScience[1]++;
        }
        if (Number(val.final) < 46) {
          this.computerScience[2]++;
        }
        if (Number(val.final) < 56) {
          this.computerScience[3]++;
        }
        if (Number(val.final) < 66) {
          this.computerScience[4]++;
        }
        if (Number(val.final) < 76) {
          this.computerScience[5]++;
        }
        if (Number(val.final) < 86) {
          this.computerScience[6]++;
        }
        if (Number(val.final) < 96) {
          this.computerScience[7]++;
        }
      }
      if (m === 'BCE') {
        if (Number(val.final) < 26) {
          this.computerEngineering[0]++;
        }
        if (Number(val.final) < 36) {
          this.computerEngineering[1]++;
        }
        if (Number(val.final) < 46) {
          this.computerEngineering[2]++;
        }
        if (Number(val.final) < 56) {
          this.computerEngineering[3]++;
        }
        if (Number(val.final) < 66) {
          this.computerEngineering[4]++;
        }
        if (Number(val.final) < 76) {
          this.computerEngineering[5]++;
        }
        if (Number(val.final) < 86) {
          this.computerEngineering[6]++;
        }
        if (Number(val.final) < 100) {
          this.computerEngineering[7]++;
        }
      }
    }
  }

}
