import { TestBed } from '@angular/core/testing';

import { UniqueUsernameValidatorService } from './unique-username-validator.service';

describe('UniqueUsernameValidatorService', () => {
  let service: UniqueUsernameValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueUsernameValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
