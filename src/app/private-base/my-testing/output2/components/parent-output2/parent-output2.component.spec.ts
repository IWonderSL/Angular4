import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOutput2Component } from './parent-output2.component';

describe('ParentOutput2Component', () => {
  let component: ParentOutput2Component;
  let fixture: ComponentFixture<ParentOutput2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentOutput2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentOutput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
