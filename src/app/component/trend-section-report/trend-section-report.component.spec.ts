import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendSectionReportComponent } from './trend-section-report.component';

describe('TrendSectionReportComponent', () => {
  let component: TrendSectionReportComponent;
  let fixture: ComponentFixture<TrendSectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendSectionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendSectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
