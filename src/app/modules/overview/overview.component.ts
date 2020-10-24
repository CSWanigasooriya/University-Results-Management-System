import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SqlService } from 'src/app/services/sql.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  done: any[] = [];
  incompleteCAS: any[] = [];

  constructor(
    private excelSrv: ExcelService,
    private auth: FirebaseService,
    private apiService: SqlService
  ) { }

  ngOnInit(): void {
    this.apiService.readResult().subscribe(res => {
      res.forEach(val => {
        if (val.final !== '' && val.es_2 !== '' && val.es_1 !== '') {
          this.done.push(val);
        }
        if (val.cas === '') {
          this.incompleteCAS.push(val);
        }
      });
    });
  }

  exportData(tableId: string) {
    this.excelSrv.exportToFile(Date(), tableId);
  }

  getGrade(mark) {
    const finalMark = mark;
    if (finalMark <= 100 && finalMark >= 85) {
      return 'A+';
    } else if (finalMark < 85 && finalMark >= 75) {
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
    } else {
      return 'Ie / Ia';
    }
  }
}
