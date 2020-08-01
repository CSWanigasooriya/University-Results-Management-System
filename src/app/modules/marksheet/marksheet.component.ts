import { ModalService } from 'src/app/services/modal.service';
import { MarksEditComponent } from './../../shared/marks-edit/marks-edit.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
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
  constructor(
    private dialog: MatDialog,
    public modal: ModalService
  ) { }

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

}
