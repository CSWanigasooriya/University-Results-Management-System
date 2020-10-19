import { Component, OnInit } from '@angular/core';
declare var $;
declare var M;

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent implements OnInit {
  mark;
  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
    $('.slider').slider({
      indicators: false
    });
  }
  getGrade() {
    const finalMark = this.mark;
    if (finalMark <= 100 && finalMark >= 85) {
      return 'A+';
    } else if (finalMark < 84 && finalMark >= 75) {
      return 'A';
    } else if (finalMark < 75 && finalMark >= 70) {
      return 'A-';
    } else if (finalMark < 70 && finalMark >= 65) {
      return 'B+';
    } else if (finalMark < 65 && finalMark >= 60) {
      return 'B';
    } else if (finalMark < 60 && finalMark >= 55) {
      return 'B-';
    } else if (finalMark < 55 && finalMark >= 50) {
      return 'C+';
    } else if (finalMark < 50 && finalMark >= 45) {
      return 'C';
    } else if (finalMark < 45 && finalMark >= 40) {
      return 'C-';
    } else if (finalMark < 40 && finalMark >= 35) {
      return 'D+';
    } else if (finalMark < 35 && finalMark >= 30) {
      return 'D';
    } else if (finalMark < 30 && finalMark >= 0) {
      return;
    }
  }
}
