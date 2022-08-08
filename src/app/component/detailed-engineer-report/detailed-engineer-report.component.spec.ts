import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedEngineerReportComponent } from './detailed-engineer-report.component';

describe('DetailedEngineerReportComponent', () => {
  let component: DetailedEngineerReportComponent;
  let fixture: ComponentFixture<DetailedEngineerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedEngineerReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedEngineerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
