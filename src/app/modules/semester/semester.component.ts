import { Component, OnInit } from '@angular/core';
declare var M;
@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
