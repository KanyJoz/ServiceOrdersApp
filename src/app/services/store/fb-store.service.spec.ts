import { TestBed } from '@angular/core/testing';

import { FbStoreService } from './fb-store.service';

describe('FbStoreService', () => {
  let service: FbStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
