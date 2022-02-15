package com.jlabs.service;

import com.jlabs.persistence.PatientAppointmentPersistence;
import com.jlabs.persistence.entity.PatientAppointmentEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class PatientAppointmentService {

  @Autowired
  private PatientAppointmentPersistence patientAppointmentPersistence;

  public Optional<List<PatientAppointmentEntity>> getAllAppointments(){
    Optional<List<PatientAppointmentEntity>> patientAppointments = Optional.ofNullable(patientAppointmentPersistence.getAllAppointments());
    log.info("Retrieve all appointments: {}" , patientAppointments);
    return patientAppointments;
  }
}
