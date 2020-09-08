import { ModalService } from '../../services/modal.service';
import { SqlService } from '../../services/sql.service';
import { APP_CONFIG, AppConfig } from '../../interfaces/app.config';
import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-marks-edit',
  templateUrl: './marks-edit.component.html',
  styleUrls: ['./marks-edit.component.scss']
})
export class MarksEditComponent implements OnInit {
  @Output() data = new EventEmitter();
  isLinear = false;
  lecturers;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private messageService: ModalService,
    private formBuilder: FormBuilder,
    @Inject(APP_CONFIG) public config: AppConfig,
    private apiService: SqlService
  ) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.apiService.readLecturer().subscribe(lecturer => {
      this.lecturers = lecturer;
    });
  }

  setValue() {
    this.messageService.setSetter(String(this.firstFormGroup.get('firstCtrl').value));
    this.messageService.setModerator(String(this.secondFormGroup.get('secondCtrl').value));
  }

}
