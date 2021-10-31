import { TestBed } from '@angular/core/testing';

import { ChronoTimePickerService } from './chrono-time-picker.service';

describe('ChronoTimePickerService', () => {
  let service: ChronoTimePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChronoTimePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
