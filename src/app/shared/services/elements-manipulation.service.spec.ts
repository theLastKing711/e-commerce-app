import { TestBed } from '@angular/core/testing';

import { ElementsManipulationService } from './elements-manipulation.service';

describe('ElementsManipulationService', () => {
  let service: ElementsManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementsManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
