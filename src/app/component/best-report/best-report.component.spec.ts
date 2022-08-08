import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestReportComponent } from './best-report.component';

describe('BestReportComponent', () => {
  let component: BestReportComponent;
  let fixture: ComponentFixture<BestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
