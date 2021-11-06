import { TestBed } from '@angular/core/testing';

import { CycletteService } from './cyclette.service';

describe('CycletteService', () => {
  let service: CycletteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
