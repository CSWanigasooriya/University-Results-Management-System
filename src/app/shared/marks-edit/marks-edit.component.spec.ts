import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksEditComponent } from './marks-edit.component';

describe('MarksEditComponent', () => {
  let component: MarksEditComponent;
  let fixture: ComponentFixture<MarksEditComponent>;

  beforeEach(async(() => {
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
