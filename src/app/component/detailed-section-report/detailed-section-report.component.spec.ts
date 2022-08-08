import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedSectionReportComponent } from './detailed-section-report.component';

describe('DetailedSectionReportComponent', () => {
  let component: DetailedSectionReportComponent;
  let fixture: ComponentFixture<DetailedSectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedSectionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedSectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
