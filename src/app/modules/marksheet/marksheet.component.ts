import { FormControl } from '@angular/forms';
import { StudentService } from './../../services/student.service';
import { Student } from 'src/app/interfaces/student';
import { ModalService } from 'src/app/services/modal.service';
import { MarksEditComponent } from './../../shared/marks-edit/marks-edit.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare var M;


@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit, OnDestroy {
  intake: string;
  course: string;
  selectedValue: string;
  items: Array<any>;
  index: any[] = [
    { index: 'D-BSE-19-0004' },
    { index: 'D-BSE-19-0005' },
    { index: 'D-BSE-19-0006' }
  ];
  questions = new FormControl();
  questionList: string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];

  constructor(
    public std: StudentService,
    private dialog: MatDialog,
    public modal: ModalService
  ) { }

  ngOnInit(): void {
    this.std.getUsers().subscribe(data => {
      this.items = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Student
        };
      });
    });
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      data: {
        title: 'Let Us Make Things Easier',
        component: MarksEditComponent,
        cancelText: '',
        confirmText: 'Done'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.modal.currentTitle.subscribe(res => { this.intake = res; });
      this.modal.currentContent.subscribe(res => { this.course = res; });
    });
    M.AutoInit();
    M.updateTextFields();
  }

  ngOnDestroy() {
    this.dialog.closeAll();
  }

  get filterByIndex() {
    return this.items ? this.items.filter(x => x.id === this.selectedValue) : null;
    }

}
