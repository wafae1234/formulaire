import { TestBed } from '@angular/core/testing';

import { FrorminputService } from './frorminput.service';

describe('FrorminputService', () => {
  let service: FrorminputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrorminputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
