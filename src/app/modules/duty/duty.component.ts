import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { User } from './../../interfaces/user';
import { FirebaseService } from './../../services/firebase.service';
import { ModalService } from './../../services/modal.service';
import { SqlService } from './../../services/sql.service';
import { MarksEditComponent } from './../../shared/marks-edit/marks-edit.component';

@Component({
  selector: 'app-duty',
  templateUrl: './duty.component.html',
  styleUrls: ['./duty.component.scss']
})
export class DutyComponent implements OnInit {

  setters: any[] = [];
  moderators: any[] = [];
  isLinear = false;
  modules: any[] = [];
  users: any[] = [];
  selectedModule;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private auth: FirebaseService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private apiService: SqlService,
    private dialog: MatDialog
  ) {
    this.modalService.getSetter().subscribe(message => {
      if (message) {
        this.setters.push(message);
        this.apiService.readLecturer().subscribe(lec => {
          lec.forEach(element => {
            if (element.lec_id === message) {
              const data = {
                uid: message,
                email: element.lec_email,
                displayName: element.lec_name,
                photoURL: '',
                roles: {
                  setter: true,
                  subscriber: true
                }
              };
              this.auth.setSetter(data).then(() => {
                const roles = {
                  uid: message,
                  email: element.lec_email,
                  role: '1'
                };
                this.apiService.createRole(roles).subscribe(role => {
                  console.log(role);
                });
              });
            }
          });
        });
      } else {
        return;
      }
    });

    this.modalService.getModerator().subscribe(message => {
      if (message) {
        this.moderators.push(message);
        this.apiService.readLecturer().subscribe(lec => {
          lec.forEach(element => {
            if (element.lec_id === message) {
              const data = {
                uid: message,
                email: element.lec_email,
                displayName: element.lec_name,
                photoURL: '',
                roles: {
                  moderator: true,
                  subscriber: true
                }
              };
              this.auth.setSetter(data).then(() => {
                const roles = {
                  uid: message,
                  email: element.lec_email,
                  role: '2'
                };
                this.apiService.createRole(roles).subscribe(role => {
                  console.log(role);
                });
              });
            }
          });
        });
      } else {
        return;
      }
    });
  }

  ngOnInit() {
    this.apiService.readModule().subscribe(modules => {
      this.modules = modules;
    });
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  setRoles(module) {
    this.openDialog('Select Setter and Moderator for ' + module.mod_name);
    this.selectedModule = module;
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
        component: MarksEditComponent,
        cancelText: 'Cancel',
        confirmText: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.modules.indexOf(this.selectedModule, 0);
        if (index > -1) {
          this.modules.splice(index, 1);
        }
      }
    });
  }

  deleteRole(lec) {

  }
}
