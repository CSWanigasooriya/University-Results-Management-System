import { Component, OnInit } from '@angular/core';

declare var M;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  type;
  constructor() {
  }

  ngOnInit(): void {
    M.AutoInit();
    this.type = 'radar';
  }

}
