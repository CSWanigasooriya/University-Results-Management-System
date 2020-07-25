import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
declare var M;
@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.scss']
})
export class MarksheetComponent implements OnInit {

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
