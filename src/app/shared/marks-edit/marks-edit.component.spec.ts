import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MarksEditComponent } from './marks-edit.component';

describe('MarksEditComponent', () => {
  let component: MarksEditComponent;
  let fixture: ComponentFixture<MarksEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
