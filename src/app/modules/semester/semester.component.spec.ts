import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SemesterComponent } from './semester.component';

describe('SemesterComponent', () => {
  let component: SemesterComponent;
  let fixture: ComponentFixture<SemesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
