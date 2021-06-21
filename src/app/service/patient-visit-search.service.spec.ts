import { TestBed } from '@angular/core/testing';

import { PatientVisitSearchService } from './patient-visit-search.service';

describe('PatientVisitSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientVisitSearchService = TestBed.get(PatientVisitSearchService);
    expect(service).toBeTruthy();
  });
});
