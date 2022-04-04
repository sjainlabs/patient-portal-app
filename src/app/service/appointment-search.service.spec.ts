import { TestBed } from '@angular/core/testing';

import { AppointmentSearchService } from './appointment-search.service';

describe('AppointmentSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentSearchService = TestBed.get(AppointmentSearchService);
    expect(service).toBeTruthy();
  });
});
