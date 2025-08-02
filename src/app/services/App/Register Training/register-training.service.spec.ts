import { TestBed } from '@angular/core/testing';

import { RegisterTrainingService } from './register-training.service';

describe('RegisterTrainingService', () => {
  let service: RegisterTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
