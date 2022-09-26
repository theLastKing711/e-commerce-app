import { TestBed } from '@angular/core/testing';

import { FakeProductServiceService } from './fake-product-service.service';

describe('FakeProductServiceService', () => {
  let service: FakeProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
