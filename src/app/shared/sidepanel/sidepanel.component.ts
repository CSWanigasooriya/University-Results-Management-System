import { Component, AfterViewInit } from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements AfterViewInit {
  options: [{'draggable': false}];
  constructor() { }

  ngAfterViewInit(): void {
    M.AutoInit();
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, this.options);
  }
}
