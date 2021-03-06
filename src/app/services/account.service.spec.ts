import { TestBed, inject } from '@angular/core/testing';

import { AccountService } from './account.service';
import { State } from './state';

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService, State]
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
