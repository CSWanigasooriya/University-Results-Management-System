import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploaderComponent } from 'src/app/shared/dropzone/uploader.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { FirebaseService } from './../../services/firebase.service';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  selectedFile = null;
  profileGroup: FormGroup;
  accountGroup: FormGroup;
  selectedValue;
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
      email: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])
    });
  }


  submit() {
    this.auth.user$.subscribe(user => {
      const data = {
        uid: user.uid,
        email: user.email,
        displayName: this.profileGroup.get('firstName').value + ' ' + this.profileGroup.get('lastName').value,
        photoURL: user.photoURL
      };
      this.auth.updateUserData(data);
    });
  }

  onFileSelected(event: any) {
    this.openDropZone('');
  }

  sendVerification(email) {
    this.auth.resetPassword(email).then(user => {
      if (this.accountGroup.get('email').valid) {
        this.openDialog('Password Rest Email has been sent', 'Please check your email');
      } else {
        throw new TypeError('Please enter a valid email');
      }
    }).catch(error => {
      this.openDialog('Invalid Email', error.message);
    });
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
        confirmText: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openDropZone(title: string, content?: string) {
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
