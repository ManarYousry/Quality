import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerEvaluationComponent } from './engineer-evaluation.component';

describe('EngineerEvaluationComponent', () => {
  let component: EngineerEvaluationComponent;
  let fixture: ComponentFixture<EngineerEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
