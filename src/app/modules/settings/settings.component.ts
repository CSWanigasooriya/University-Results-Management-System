import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from './../../services/firebase.service';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploaderComponent } from 'src/app/shared/dropzone/uploader.component';
declare var M;
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit, OnInit {
  selectedValue: string;
  selectedFile = null;
  profileGroup: FormGroup;
  accountGroup: FormGroup;
  hovered = false;
  foods: Food[] = [
    { value: 'intake-0', viewValue: 'Coumputer Science' },
    { value: 'intake-1', viewValue: 'Computer Engineering' },
    { value: 'intake-2', viewValue: 'Computational Mathematics' }
  ];

  constructor(
    private dialog: MatDialog,
    public auth: FirebaseService) {
    this.profileGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
    this.accountGroup = new FormGroup({
      email: new FormControl('')
    });
  }

  ngAfterViewInit(): void {
    M.AutoInit();
  }

  ngOnInit() {
  }

  submit() {
    this.auth.user$.subscribe(user => {
      const data = {
        uid: user.uid,
        email: user.email,
        displayName: this.profileGroup.get('firstName').value + ' ' + this.profileGroup.get('lastName').value,
        photoURL: user.photoURL
      };
      this.auth.updateUserData(data, user.password);
    });
  }

  onFileSelected(event: any) {
    this.openDialog('Drop');
  }

  openDialog(title: string, content?: string) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      data: {
        title,
        content,
        cancelText: 'Cancel',
        confirmText: '',
        component: UploaderComponent
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
