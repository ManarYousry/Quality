import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendShiftReportComponent } from './trend-shift-report.component';

describe('TrendShiftReportComponent', () => {
  let component: TrendShiftReportComponent;
  let fixture: ComponentFixture<TrendShiftReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendShiftReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendShiftReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
