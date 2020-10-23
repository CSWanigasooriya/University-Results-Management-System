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
}
