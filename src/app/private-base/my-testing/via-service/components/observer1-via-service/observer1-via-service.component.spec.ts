import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observer1ViaServiceComponent } from './observer1-via-service.component';

describe('Observer1ViaServiceComponent', () => {
  let component: Observer1ViaServiceComponent;
  let fixture: ComponentFixture<Observer1ViaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Observer1ViaServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Observer1ViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
