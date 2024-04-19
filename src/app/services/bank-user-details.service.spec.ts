import { TestBed } from '@angular/core/testing';

import { BankUserDetailsService } from './bank-user-details.service';

describe('BankUserDetailsService', () => {
  let service: BankUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
