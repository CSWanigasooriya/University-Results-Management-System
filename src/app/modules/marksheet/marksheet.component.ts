import { CAS } from './../../interfaces/cas';
import { FormControl, Validators } from '@angular/forms';
import { Lecturer } from './../../interfaces/lecturer';
import { FirebaseService } from './../../services/firebase.service';
import { Mark } from './../../interfaces/mark';
import { SqlService } from './../../services/sql.service';
import { ExcelService } from './../../services/excel.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {
  hide = {
    marksheet: false,
    returnsheet: false
  };

  importMarks: Mark[] = [];
  exportMarks: Mark[] = [];
  importCAS: CAS[] = [];
  casMark = 25;
  endSemMark = 75;
  modules = [];
  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private excelSrv: ExcelService,
    private apiServce: SqlService,
    public auth: FirebaseService
  ) { }

  async ngOnInit() {
    await this.auth.user$.subscribe(user => {
      this.apiServce.readLecturer().subscribe((lec: Lecturer[]) => {
        this.apiServce.readModule().subscribe(mod => {
          for (const element of lec) {
            if (user.email === element.lec_email) {
              const lecId = element.lec_id;
              mod.forEach(module => {
                if (lecId === module.lec_id) {
                  this.modules.push(module.mod_id);
                }
              });
            }
          }
        });
      });
    });
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

  onCASFileChange(evt: any) {
    const target: DataTransfer = (evt.target as DataTransfer);
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const data = this.excelSrv.importFromFile(bstr) as any[];

      const header: string[] = Object.getOwnPropertyNames(new CAS());
      const importedData = data.slice(1, -1);

      this.importCAS = importedData.map(arr => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = arr[i];
        }
        return obj as CAS;
      });
    };

    reader.readAsBinaryString(target.files[0]);
  }


  exportData(tableId: string) {
    this.excelSrv.exportToFile(Date(), tableId);
  }

  onSuccess() {

    for (const i of this.importMarks) {
      const data = {
        res_id: String(this.importMarks.indexOf(i)),
        st_id: i.Index,
        mod_id: this.selectFormControl.value,
        cas: 5,
        end_sem: 5,
        final: 5
      };
      this.apiServce.createResult(data).subscribe(res => {
        if (res != null) {
          this.hide.marksheet = true;
        }
      });
    }
  }

  dataChange(event: any[]) {
    this.importMarks = event;
  }


  filterModule(element) {
    return element >= 18;
  }

  addMark(mark: Mark) {
    const data = {
      Q1: mark.Q1 ? mark.Q1 : 0,
      Q2: mark.Q2 ? mark.Q2 : 0,
      Q3: mark.Q3 ? mark.Q3 : 0,
      Q4: mark.Q4 ? mark.Q4 : 0,
      Q5: mark.Q5 ? mark.Q5 : 0,
      Q6: mark.Q6 ? mark.Q6 : 0
    };
    return Number(data.Q1) + Number(data.Q2) + Number(data.Q3) + Number(data.Q4) + Number(data.Q5) + Number(data.Q6);
  }

  getGrade(mark) {
    const finalMark = this.getFinal(mark);
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
      return 'E';
    }
  }

  getCAS(mark: CAS) {
    for (const elem of this.importCAS) {
      if (elem.Index === mark.Index) {
        return (this.casMark * elem.CAS) / 100;
      }
    }
  }

  getFinal(mark) {
    const endMark = this.addMark(mark);
    const cas = this.getCAS(mark);
    if (cas != null && endMark != null) {
      return cas + (this.endSemMark * endMark) / 100;
    } else {
      return (this.endSemMark * endMark) / 100;
    }
  }

}
