import { TestBed } from '@angular/core/testing';

import { FbAuthGuardService } from './fb-auth-guard.service';

describe('FbAuthGuardService', () => {
  let service: FbAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
