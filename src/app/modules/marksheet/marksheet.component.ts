import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
declare var M;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
  form: FormGroup;
  orders = [];

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      orders: ['']
    });
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
    });
  }

  getOrders() {
    return [
      { id: '1', name: 'Intake 34' },
      { id: '2', name: 'Intake 35' },
      { id: '3', name: 'Intake 36' },
      { id: '4', name: 'Intake 37' }
    ];
  }

  ngOnInit(): void {
    M.AutoInit();
    M.updateTextFields();
  }

}
