import { Component, OnInit } from '@angular/core';
declare var M;
@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
    M.updateTextFields();
  }

}
