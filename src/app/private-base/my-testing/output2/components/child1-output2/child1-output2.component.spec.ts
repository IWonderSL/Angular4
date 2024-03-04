import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Output2Component } from './child1-output2.component';

describe('Child1Output2Component', () => {
  let component: Child1Output2Component;
  let fixture: ComponentFixture<Child1Output2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child1Output2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child1Output2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
