package com.jlabs.service;

import com.jlabs.persistence.PatientAppointmentPersistence;
import com.jlabs.persistence.entity.PatientAppointmentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientAppointmentService {

  @Autowired
  private PatientAppointmentPersistence patientAppointmentPersistence;

  public List<PatientAppointmentEntity> getAppointment(){
    return patientAppointmentPersistence.getAppointment();
  }
}
