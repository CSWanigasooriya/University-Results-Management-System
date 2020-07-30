import { MarksEditComponent } from './../../shared/marks-edit/marks-edit.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare var M;


@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {

  constructor(
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      data: {
        title: 'Let Us Make Things Easier',
        component: MarksEditComponent,
        cancelText: 'Cancel',
        confirmText: 'Done'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

    });
    M.AutoInit();
    M.updateTextFields();
  }

}
