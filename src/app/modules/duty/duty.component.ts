import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
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
  isSetter = false;
  isModerator = false;
  modules: any[] = [];
  users: any[] = [];
  roles: any[] = [];
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
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.checkRole();
  }

  ngOnInit() {
    this.updateRecords();
    this.modalService.getSetter().subscribe(id => {
      if (this.isSetter === false) {
        this.updateSetter(id);
      } else {
        alert(`${id} is already a setter`);
      }
    });
    this.modalService.getModerator().subscribe(id => {
      if (this.isModerator === false) {
        this.updateModerator(id);
      } else {
        alert(`${id} is already a moderator`);
      }
    });
  }

  checkRole() {
    this.modalService.getSetter().subscribe(message => {
      this.auth.getAllUsers().subscribe(users => {
        users.forEach(user => {
          if (user.uid === message) {
            if (user.roles.setter === true) {
              this.isSetter = true;
            }
          }
        });
      });
    });
    this.modalService.getModerator().subscribe(message => {
      this.auth.getAllUsers().subscribe(users => {
        users.forEach(user => {
          if (user.uid === message) {
            if (user.roles.moderator === true) {
              this.isModerator = true;
            }
          }
        });
      });
    });
  }

  updateSetter(message) {
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
          const user = {
            email: element.lec_email,
            password: '123123'
          };
          this.auth.createUser(user);
          this.auth.setSetter(data).then(() => {
            const roles = {
              uid: message,
              mod_id: this.selectedModule?.mod_id,
              email: element.lec_email,
              role: '1'
            };
            this.apiService.createRole(roles).subscribe(role => {
              this.updateRecords();
            });
          });
        }
      });
    });
  }

  updateModerator(message) {
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
          const user = {
            email: element.lec_email,
            password: '123123'
          };
          this.auth.createUser(user);
          this.auth.setModerator(data).then(() => {
            const roles = {
              uid: message,
              mod_id: this.selectedModule?.mod_id,
              email: element.lec_email,
              role: '2'
            };
            this.apiService.createRole(roles).subscribe(role => {
              this.updateRecords();
            });
          });
        }
      });
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

  updateRecords() {
    this.roles = [];
    // Roles: 0 - Admin , 1 - Moderator , 2 - Setter , 3 - Subscriber
    this.apiService.readRole().subscribe(res => {
      res.forEach(element => {
        if (element.role === '1') {
          const data = {
            uid: element.uid,
            mod_id: element.mod_id,
            email: element.email,
            role: 'Moderator'
          };
          this.roles.push(data);
        }
        if (element.role === '2') {
          const data = {
            uid: element.uid,
            mod_id: element.mod_id,
            email: element.email,
            role: 'Setter'
          };
          this.roles.push(data);
        }
      });
    });
    this.apiService.readModule().subscribe(modules => {
      this.modules = modules;
    });
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  deleteRole(data) {
    this.apiService.deleteRole(data.uid).subscribe(out => {
      if (data.role === 'Setter') {
        const info = {
          uid: data.uid,
          email: data.email,
          displayName: '',
          photoURL: '',
          roles: {
            setter: false,
            moderator: false,
            subscriber: true
          }
        };
        this.auth.setSetter(info);
      }
      if (data.role === 'Moderator') {
        const info = {
          uid: data.uid,
          email: data.email,
          displayName: '',
          photoURL: '',
          roles: {
            setter: false,
            moderator: false,
            subscriber: true
          }
        };
        this.auth.setModerator(info);
      }
      this.updateRecords();
    });
  }

  deleteCurrentRole(data) {
    if (data) {
      const index = this.setters.indexOf(data, 0);
      if (index > -1) {
        this.setters.splice(index, 1);
      }
    }
  }

}
