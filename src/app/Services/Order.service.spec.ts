import { TestBed } from '@angular/core/testing';

import { IOrderService } from './Order.service';

describe('IOrderService', () => {
  let service: IOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
