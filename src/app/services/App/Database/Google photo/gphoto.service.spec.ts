import { TestBed } from '@angular/core/testing';

import { GphotoService } from './gphoto.service';

describe('GphotoService', () => {
  let service: GphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
