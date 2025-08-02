import { TestBed } from '@angular/core/testing';

import { TimeSharedService } from './time-shared.service';

describe('TimeSharedService', () => {
  let service: TimeSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
