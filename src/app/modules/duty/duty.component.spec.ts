import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyComponent } from './duty.component';

describe('DutyComponent', () => {
  let component: DutyComponent;
  let fixture: ComponentFixture<DutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
