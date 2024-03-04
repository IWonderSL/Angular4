import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Output2Component } from './child2-output2.component';

describe('Child2Output2Component', () => {
  let component: Child2Output2Component;
  let fixture: ComponentFixture<Child2Output2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2Output2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child2Output2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
