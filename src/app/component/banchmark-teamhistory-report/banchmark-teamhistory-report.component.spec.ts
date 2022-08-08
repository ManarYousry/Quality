import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanchmarkTeamhistoryReportComponent } from './banchmark-teamhistory-report.component';

describe('BanchmarkTeamhistoryReportComponent', () => {
  let component: BanchmarkTeamhistoryReportComponent;
  let fixture: ComponentFixture<BanchmarkTeamhistoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanchmarkTeamhistoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanchmarkTeamhistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
