import { APP_CONFIG, AppConfig } from './../../interfaces/app.config';
import { MarksEditComponent } from './../../shared/marks-edit/marks-edit.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
declare var M;


@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {
  intake;
  constructor(
    private dialog: MatDialog,
    @Inject(APP_CONFIG) public config: AppConfig
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
        cancelText: 'Cancel',
        confirmText: 'Done'
      },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
        this.intake = this.config.intake;
    });
    M.AutoInit();
    M.updateTextFields();
  }

}
