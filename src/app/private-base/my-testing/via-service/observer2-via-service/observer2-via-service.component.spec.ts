import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observer2ViaServiceComponent } from './observer2-via-service.component';

describe('Observer2ViaServiceComponent', () => {
  let component: Observer2ViaServiceComponent;
  let fixture: ComponentFixture<Observer2ViaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Observer2ViaServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Observer2ViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
