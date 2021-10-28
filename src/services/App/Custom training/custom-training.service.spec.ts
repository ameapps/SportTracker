import { TestBed } from '@angular/core/testing';

import { CustomTrainingService } from './custom-training.service';

describe('CustomTrainingService', () => {
  let service: CustomTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
