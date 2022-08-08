import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanchmarkSectionhistoryReportComponent } from './banchmark-sectionhistory-report.component';

describe('BanchmarkSectionhistoryReportComponent', () => {
  let component: BanchmarkSectionhistoryReportComponent;
  let fixture: ComponentFixture<BanchmarkSectionhistoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanchmarkSectionhistoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanchmarkSectionhistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
