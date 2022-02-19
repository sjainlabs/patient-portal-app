package com.jlabs.persistence;

import com.jlabs.persistence.entity.AppointmentEntity;
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

  public Optional<List<AppointmentEntity>> getAppointmentByAppointmentId(){
     Optional<List<AppointmentEntity>> patientAppointments = patientAppointmentRepository.findAppointmentByAppointmentId(1);
     log.debug("Retrieve patient appointment by appointmentID: {}" , patientAppointments);
     return patientAppointments;
  }

  public List<AppointmentEntity> getAllAppointments(){
    List<AppointmentEntity> patientAppointments = patientAppointmentRepository.findAll();
    log.debug("Retrieve all appointments: {}" , patientAppointments);
    return patientAppointments;
  }

  public String createAppointments(AppointmentEntity appointmentEntity){
    AppointmentEntity patientAppointment = patientAppointmentRepository.save(appointmentEntity);
    log.debug("Patient appointment created {}" , patientAppointment);
    return String.valueOf(patientAppointment.getAppointmentId());
  }
}
