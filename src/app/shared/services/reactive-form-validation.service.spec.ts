import { TestBed } from '@angular/core/testing';

import { ReactiveFormValidationService } from './reactive-form-validation.service';

describe('ReactiveFormValidationService', () => {
  let service: ReactiveFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
