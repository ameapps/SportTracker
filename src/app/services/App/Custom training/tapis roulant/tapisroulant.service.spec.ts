import { TestBed } from '@angular/core/testing';

import { TapisroulantService } from './tapisroulant.service';

describe('TapisroulantService', () => {
  let service: TapisroulantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TapisroulantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
