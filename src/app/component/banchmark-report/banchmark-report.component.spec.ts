import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanchmarkReportComponent } from './banchmark-report.component';

describe('BanchmarkReportComponent', () => {
  let component: BanchmarkReportComponent;
  let fixture: ComponentFixture<BanchmarkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanchmarkReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanchmarkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
