import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SqlService } from 'src/app/services/sql.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
declare var M;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  users;
  departments;
  students;
  form = new FormGroup({
    studentID: new FormControl(),
    IDname: new FormControl(),
    email: new FormControl({ value: '', disabled: true }),
    studentName: new FormControl(),
    studentPhone: new FormControl()
  });


  constructor(
    private dialog: MatDialog,
    private apiService: SqlService
  ) { }

  updateRecords() {
    this.apiService.readUsers().subscribe(module => {
      this.users = module;
    });
    this.apiService.readDepartment().subscribe(department => {
      this.departments = department;
    });
    this.apiService.readStudents().subscribe(lecturer => {
      this.students = lecturer;
    });
  }

  ngOnInit(): void {
    M.AutoInit();
    this.updateRecords();
  }

  checkID(): boolean {
    if (this.form.get('email')?.value !== null) {
      alert('Email is required');
      return false;
    }
    if (this.form.get('IDname')?.value !== null) {
      const d = this.form.get('IDname')?.value.split(('/'))[0];
      const s = this.form.get('IDname')?.value.split(('/'))[1];
      const i = Number(this.form.get('IDname')?.value.split(('/'))[2]);
      const c = Number(this.form.get('IDname')?.value.split(('/'))[3]);
      if (d === 'D' || s === 'BSE' || s === 'BCE' || s === 'BCS'
        || Number.isInteger(i) || Number.isInteger(c)) {
        return true;
      }
      else {
        alert('Invalid student ID!');
        return false;
      }
    }
  }

  success() {
    let contains = false;
    this.apiService.readStudents().subscribe(lec => {
      for (const element of lec) {
        if (element.std_id === this.form.get('studentID').value?.uid) {
          alert('This record already exists!');
          contains = true;
          break;
        }
      }
    });
    if (this.checkID() === true) {
      if (contains === false) {
        const data = {
          uid: String(this.form.get('studentID').value?.uid),
          std_id: String(this.form.get('IDname')?.value),
          std_name: String(this.form.get('studentName')?.value),
          std_email: String(this.form.get('studentID').value?.email),
          std_phone: String(this.form.get('studentPhone').value),
        };
        this.apiService.createStudent(data).subscribe(res => {
          this.updateRecords();
          this.openDialog('Do you want to register this student?', 'Default password is 123123');
          alert('Successfully added record!');
        });
      }
    }
  }

  delete(data) {
    this.apiService.deleteStudent(data.std_id).subscribe(res => {
      this.updateRecords();
      alert('Successfully deleted record!');
    });
  }

  myFunction() {
    // Declare variables
    let input;
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    input = document.getElementById('studentInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('studentTable');
    tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  openDialog(title: string, content?: string) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ModalComponent, {
      position: {
        top: '10vh'
      },
      width: '600px',
      disableClose: true,
      data: {
        title,
        content,
        cancelText: 'Cancel',
        confirmText: 'Submit Again'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === false) {

      }
    });
  }

}
