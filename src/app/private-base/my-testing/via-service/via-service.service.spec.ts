import { TestBed } from '@angular/core/testing';

import { ViaServiceService } from './via-service.service';

describe('ViaServiceService', () => {
  let service: ViaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
