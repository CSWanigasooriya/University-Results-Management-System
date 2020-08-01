import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
@Component({
  selector: 'app-datachart',
  templateUrl: './datachart.component.html',
  styleUrls: ['./datachart.component.scss']
})
export class DatachartComponent implements OnInit {

  // Barchart
  public barChartOptions = {
    scales: {
      yAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'A+ ( % )'
        },
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: 'Semester'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    },
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)),
      label: 'CS'
    },
    {
      data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)),
      label: 'SE'
    },
    {
      data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)),
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
        'rgba(255, 0, 0, 0.2)'
      ],
      borderColor: [
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
        'rgba(255, 168, 38, 0.2)'
      ],
      borderColor: [
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
        'rgba(39, 152, 45, 0.2)'
      ],
      borderColor: [
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
  lineChartData: ChartDataSets[] = this.barChartData;
  // [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  //   { data: [90, 13, 23, 65, 34, 12], label: 'Crude oil' }
  // ];

  lineChartLabels: Label[] = this.barChartLabels;
  // ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = this.barChartOptions;
  // {
  //   responsive: true,
  // };

  lineChartColors: Color[] = this.barChartColors;
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
  public pieChartLabels: Label[] = this.barChartLabels;
  //  ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = this.barChartData;
  // [120, 150, 180, 90];
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
  public doughnutChartLabels = this.barChartLabels;
  //  ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = this.barChartData;
  //  [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';


  ngOnInit(): void {
  }

}
