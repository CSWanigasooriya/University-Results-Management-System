import { APP_CONFIG, AppConfig } from './../../interfaces/app.config';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marks-edit',
  templateUrl: './marks-edit.component.html',
  styleUrls: ['./marks-edit.component.scss']
})
export class MarksEditComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  intakes = ['Intake 34', 'Intake 35', 'Intake 36', 'Intake 37'];
  courses = ['CS2122', 'CS2013'];
  constructor(private formBuilder: FormBuilder, @Inject(APP_CONFIG) public config: AppConfig) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  setValue() {

  }

}
