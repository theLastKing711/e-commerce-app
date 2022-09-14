import { TestBed } from '@angular/core/testing';

import { CarouselPaginationService } from './carousel-pagination.service';

describe('CarouselPaginationService', () => {
  let service: CarouselPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
