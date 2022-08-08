import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeEvaluatorComponent } from './distribute-evaluator.component';

describe('DistributeEvaluatorComponent', () => {
  let component: DistributeEvaluatorComponent;
  let fixture: ComponentFixture<DistributeEvaluatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributeEvaluatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
