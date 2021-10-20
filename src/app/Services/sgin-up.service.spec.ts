import { TestBed } from '@angular/core/testing';

import { SginUpService } from './sgin-up.service';

describe('SginUpService', () => {
  let service: SginUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SginUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
