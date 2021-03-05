import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarksheetComponent } from './marksheet.component';

describe('MarksheetComponent', () => {
  let component: MarksheetComponent;
  let fixture: ComponentFixture<MarksheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
