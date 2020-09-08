import { ModalService } from './../../services/modal.service';
import { MarksEditComponent } from './../../shared/marks-edit/marks-edit.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from './../../interfaces/user';
import { SqlService } from './../../services/sql.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private apiService: SqlService,
    private dialog: MatDialog
  ) {
    this.modalService.getSetter().subscribe(message => {
      if (message) {
        this.setters.push(message);
      } else {
      }
    });

    this.modalService.getModerator().subscribe(message => {
      if (message) {
        this.moderators.push(message);
      } else {
      }
    });
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.apiService.readUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    this.apiService.readModule().subscribe(modules => {
      this.modules = modules;
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
}
