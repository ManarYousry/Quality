import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkEngineerComponent } from './benchmark-engineer.component';

describe('BenchmarkEngineerComponent', () => {
  let component: BenchmarkEngineerComponent;
  let fixture: ComponentFixture<BenchmarkEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
