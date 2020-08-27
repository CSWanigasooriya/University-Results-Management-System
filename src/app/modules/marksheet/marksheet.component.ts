import { Mark } from './../../interfaces/mark';
import { SqlService } from './../../services/sql.service';
import { ExcelService } from './../../services/excel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit{
  importMarks: Mark[] = [];
  exportMarks: Mark[] = [];

  constructor(
    private excelSrv: ExcelService,
    private apiServce: SqlService
  ) { }

  ngOnInit(){
  }

  onFileChange(evt: any) {
    const target: DataTransfer = (evt.target as DataTransfer);
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = this.excelSrv.importFromFile(bstr) as any[];

      const header: string[] = Object.getOwnPropertyNames(new Mark());
      const importedData = data.slice(1, -1);

      this.importMarks = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return obj as Mark;
      });
    };

    reader.readAsBinaryString(target.files[0]);
  }

  exportData(tableId: string) {
    this.excelSrv.exportToFile('i', tableId);
  }

  onSuccess() {
    for (const i of this.importMarks) {
      const data = {
        res_id: '123',
        st_id: i.Index,
        mod_id: '2',
        cas: '3',
        end_sem: i.Total,
        final: '5'
      };
      this.apiServce.createResult(data).subscribe();
    }
  }

}
