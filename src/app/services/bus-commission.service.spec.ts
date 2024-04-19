import { TestBed } from '@angular/core/testing';

import { BusCommissionService } from './bus-commission.service';

describe('BusCommissionService', () => {
  let service: BusCommissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusCommissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
