import { TestBed } from '@angular/core/testing';

import { DisplayPersonsService } from './display-persons.service';

describe('DisplayPersonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayPersonsService = TestBed.get(DisplayPersonsService);
    expect(service).toBeTruthy();
  });
});
