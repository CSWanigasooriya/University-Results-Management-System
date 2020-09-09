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
    moduleID: new FormControl(''),
    departmentID: new FormControl(''),
    lecturerID: new FormControl(''),
    moduleName: new FormControl(''),
    moduleCredit: new FormControl(''),
    moduleSemester: new FormControl('')
  });

  constructor(
    private apiService: SqlService
  ) { }

  async ngOnInit() {

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
    const data = {
      mod_id: '123',
      dep_id: 'lol',
      lec_id: '123',
      mod_name: 'name',
      mod_credit: '4',
      semester: '5'
    };
    this.apiService.createModule(data).subscribe();
  }

}
