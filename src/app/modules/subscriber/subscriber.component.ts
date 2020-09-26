import { Component, OnInit } from '@angular/core';
declare var $;
declare var M;

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
    $('.slider').slider({
      indicators: false
    });
  }

}
