import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedShiftReportComponent } from './detailed-shift-report.component';

describe('DetailedShiftReportComponent', () => {
  let component: DetailedShiftReportComponent;
  let fixture: ComponentFixture<DetailedShiftReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedShiftReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedShiftReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
