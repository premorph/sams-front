import { TestBed } from '@angular/core/testing';

import { BalanceImplementionRepository } from './balance-implemention-repository.service';

describe('BalanceImplementionRepositoryService', () => {
  let service: BalanceImplementionRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceImplementionRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
