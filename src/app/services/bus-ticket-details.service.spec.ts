import { TestBed } from '@angular/core/testing';

import { BusTicketDetailsService } from './bus-ticket-details.service';

describe('BusTicketDetailsService', () => {
  let service: BusTicketDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusTicketDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
