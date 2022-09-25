import { TestBed } from '@angular/core/testing';

import { FakeCategoryService } from './fake-category.service';

describe('FakeCategoryService', () => {
  let service: FakeCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
