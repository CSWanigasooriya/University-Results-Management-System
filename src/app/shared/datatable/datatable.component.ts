import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})

export class DatatableComponent implements OnInit {

  constructor() { }
  displayedColumns = ['position', 'grade', 'gpa', 'marks'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
export interface GradePoint {
  position: number;
  grade: string;
  gpa: number;
  marks: string;
}

const ELEMENT_DATA: GradePoint[] = [
  { position: 1, grade: 'A+', gpa: 4.2, marks: '80-100' },
  { position: 2, grade: 'A', gpa: 4.0, marks: '75-80' },
  { position: 3, grade: 'A-', gpa: 3.8, marks: '70-75' },
  { position: 4, grade: 'B+', gpa: 3.6, marks: '65-70' },
  { position: 5, grade: 'B', gpa: 3.4, marks: '60-65' },
  { position: 6, grade: 'B-', gpa: 3.2, marks: '55-60' },
  { position: 7, grade: 'C+', gpa: 3.0, marks: '50-55' },
  { position: 8, grade: 'C', gpa: 2.8, marks: '45-50' },
  { position: 9, grade: 'D', gpa: 2.6, marks: '35-45' },
  { position: 10, grade: 'F', gpa: 0, marks: '0-35' },
];
