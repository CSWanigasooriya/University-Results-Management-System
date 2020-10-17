import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SqlService } from 'src/app/services/sql.service';
declare var M;
@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.scss']
})
export class LecturerComponent implements OnInit {
  users;
  departments;
  lecturers;
  form = new FormGroup({
    departmentID: new FormControl(),
    lecturerID: new FormControl(),
    email: new FormControl({ value: '', disabled: true }),
    lecName: new FormControl()
  });


  constructor(
    private apiService: SqlService
  ) { }

  updateRecords() {
    this.apiService.readUsers().subscribe(module => {
      this.users = module;
    });
    this.apiService.readDepartment().subscribe(department => {
      this.departments = department;
    });
    this.apiService.readLecturer().subscribe(lecturer => {
      this.lecturers = lecturer;
    });
  }

  ngOnInit(): void {
    M.AutoInit();
    this.updateRecords();
  }

  success() {
    let contains = false;
    this.apiService.readLecturer().subscribe(lec => {
      for (const element of lec) {
        if (element.lec_id === this.form.get('lecturerID')?.value.uid && element.dept_id === this.form.get('departmentID')?.value) {
          alert('This record already exists!');
          contains = true;
          break;
        }
      }
    });
    if (contains === false) {
      const data = {
        lec_id: String(this.form.get('lecturerID').value?.uid),
        dept_id: String(this.form.get('departmentID')?.value),
        lec_name: String(this.form.get('lecName')?.value),
        lec_email: String(this.form.get('lecturerID').value?.email),
      };
      this.apiService.createLecturer(data).subscribe(res => {
        this.updateRecords();
        alert('Successfully added record!');
      });
    }
  }

  delete(data) {
    this.apiService.deleteLecturer(data.lec_id).subscribe(res => {
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
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
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

}
