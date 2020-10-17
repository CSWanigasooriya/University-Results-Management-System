import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SqlService } from './../../services/sql.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses;
  departments;
  lecturers;
  form = new FormGroup({
    moduleID: new FormControl(),
    departmentID: new FormControl(),
    lecturerID: new FormControl(),
    moduleName: new FormControl(),
    moduleCredit: new FormControl(),
    moduleSemester: new FormControl()
  });

  constructor(
    private apiService: SqlService
  ) { }

  async ngOnInit() {
    this.updateRecords();
  }

  updateRecords() {
    this.apiService.readModule().subscribe(module => {
      this.courses = module;
    });
    this.apiService.readDepartment().subscribe(department => {
      this.departments = department;
    });
    this.apiService.readLecturer().subscribe(lecturer => {
      this.lecturers = lecturer;
    });
  }

  success() {
    let contains = false;
    this.apiService.readModule().subscribe(module => {
      for (const element of module) {
        if (element.mod_id === this.form.get('moduleID')?.value && element.lec_id === this.form.get('lecturerID').value) {
          alert('This record already exists!');
          contains = true;
          break;
        }
      }
    });
    if (contains === false) {
      const data = {
        mod_id: String(this.form.get('moduleID')?.value),
        dep_id: String(this.form.get('departmentID')?.value),
        lec_id: String(this.form.get('lecturerID')?.value),
        mod_name: String(this.form.get('moduleName')?.value),
        mod_credit: String(this.form.get('moduleCredit')?.value),
        semester: String(this.form.get('moduleSemester')?.value)
      };
      this.apiService.createModule(data).subscribe(res => {
        alert('Successfully added record!');
        this.updateRecords();
      });
    }
  }

  delete(data) {
    this.apiService.deleteModule(data.mod_id).subscribe(res => {
      this.updateRecords();
      alert('Successfully deleted record!');
    });
  }

  filter() {
    // Declare variables
    let input;
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    input = document.getElementById('courseInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('courseTable');
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
