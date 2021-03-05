import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DatachartComponent } from './datachart.component';

describe('DatachartComponent', () => {
  let component: DatachartComponent;
  let fixture: ComponentFixture<DatachartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
