import { TestBed } from '@angular/core/testing';

import { AppointmentDataServiceService } from './appointment-data-service.service';

describe('AppointmentDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentDataServiceService = TestBed.get(AppointmentDataServiceService);
    expect(service).toBeTruthy();
  });
});
