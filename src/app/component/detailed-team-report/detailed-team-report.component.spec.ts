import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTeamReportComponent } from './detailed-team-report.component';

describe('DetailedTeamReportComponent', () => {
  let component: DetailedTeamReportComponent;
  let fixture: ComponentFixture<DetailedTeamReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedTeamReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTeamReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
