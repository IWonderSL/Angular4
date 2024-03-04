import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaServiceComponent } from './via-service.component';

describe('ViaServiceComponent', () => {
  let component: ViaServiceComponent;
  let fixture: ComponentFixture<ViaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViaServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
