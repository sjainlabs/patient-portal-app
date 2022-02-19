package com.jlabs.service;

import com.jlabs.model.Appointment;
import com.jlabs.persistence.PatientAppointmentPersistence;
import com.jlabs.persistence.entity.AppointmentEntity;
import com.jlabs.service.transform.AppointmentEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class PatientAppointmentService {

  @Autowired
  private PatientAppointmentPersistence patientAppointmentPersistence;
  AppointmentEntityMapper appointmentEntityMapper = Mappers.getMapper(AppointmentEntityMapper.class);

  public Optional<List<AppointmentEntity>> getAllAppointments(){
    Optional<List<AppointmentEntity>> patientAppointments = Optional.ofNullable(patientAppointmentPersistence.getAllAppointments());
    log.info("Retrieve all appointments: {}" , patientAppointments);
    return patientAppointments;
  }

  public String createAppointments(Appointment appointment){
    AppointmentEntity appointmentEntity = appointmentEntityMapper.AppointmentToAppointmentEntity(appointment);
    String patientAppointmentId = patientAppointmentPersistence.createAppointments(appointmentEntity);
    log.info("Created patient appointment with appointment Id: {}" , patientAppointmentId);
    return patientAppointmentId;
  }
}
