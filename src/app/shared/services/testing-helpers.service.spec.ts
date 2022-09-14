import { TestBed } from '@angular/core/testing';

import { TestingHelpersService } from './testing-helpers.service';

describe('TestingHelpersService', () => {
  let service: TestingHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
