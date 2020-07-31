import { ModalService } from 'src/app/services/modal.service';
import { DialogData } from './../../interfaces/DialogData';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  valid: boolean;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public modal: ModalService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.modal.currentTitle.subscribe(res => {
      res !== '' ? this.valid = false : this.valid = true;
    });
    this.modal.currentContent.subscribe(res => {
      res !== '' ? this.valid = false : this.valid = true;
    });
  }


}
