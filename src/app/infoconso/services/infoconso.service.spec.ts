import { TestBed } from '@angular/core/testing';

import { InfoconsoService } from './infoconso.service';

describe('InfoconsoService', () => {
  let service: InfoconsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoconsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
