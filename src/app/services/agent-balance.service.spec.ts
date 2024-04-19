import { TestBed } from '@angular/core/testing';

import { AgentBalanceService } from './agent-balance.service';

describe('AgentBalanceService', () => {
  let service: AgentBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
