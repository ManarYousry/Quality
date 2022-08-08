import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerIncludeComponent } from './engineer-include.component';

describe('EngineerIncludeComponent', () => {
  let component: EngineerIncludeComponent;
  let fixture: ComponentFixture<EngineerIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerIncludeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
