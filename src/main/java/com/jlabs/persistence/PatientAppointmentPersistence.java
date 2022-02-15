package com.jlabs.persistence;

import com.jlabs.persistence.entity.PatientAppointmentEntity;
import com.jlabs.persistence.repository.PatientAppointmentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class PatientAppointmentPersistence {

  @Autowired
  private PatientAppointmentRepository patientAppointmentRepository;

  public Optional<List<PatientAppointmentEntity>> getAppointmentByAppointmentId(){
     Optional<List<PatientAppointmentEntity>> patientAppointments = patientAppointmentRepository.findAppointmentByAppointmentId(1);
     log.debug("Retrieve patient appointment by appointmentID: {}" , patientAppointments);
     return patientAppointments;
  }

  public List<PatientAppointmentEntity> getAllAppointments(){
    List<PatientAppointmentEntity> patientAppointments = patientAppointmentRepository.findAll();
    log.debug("Retrieve all appointments: {}" , patientAppointments);
    return patientAppointments;
  }
}
