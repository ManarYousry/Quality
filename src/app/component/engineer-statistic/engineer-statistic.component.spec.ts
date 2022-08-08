import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerStatisticComponent } from './engineer-statistic.component';

describe('EngineerStatisticComponent', () => {
  let component: EngineerStatisticComponent;
  let fixture: ComponentFixture<EngineerStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
