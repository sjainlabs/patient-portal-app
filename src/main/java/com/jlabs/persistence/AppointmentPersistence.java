package com.jlabs.persistence;

import com.jlabs.model.Appointment;
import com.jlabs.persistence.entity.AppointmentEntity;
import com.jlabs.persistence.repository.AppointmentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AppointmentPersistence {

  @Autowired
  private AppointmentRepository appointmentRepository;

  public Optional<List<AppointmentEntity>> getAppointmentByAppointmentId(){
     Optional<List<AppointmentEntity>> patientAppointments = appointmentRepository.findAppointmentByAppointmentId(1);
     log.debug("Retrieve patient appointment by appointmentID: {}" , patientAppointments);
     return patientAppointments;
  }

  public List<AppointmentEntity> getAllAppointments(){
    List<AppointmentEntity> patientAppointments = appointmentRepository.findAll();
    log.debug("Retrieve all appointments: {}" , patientAppointments);
    return patientAppointments;
  }

  public String createAppointments(AppointmentEntity appointmentEntity){
    AppointmentEntity patientAppointment = appointmentRepository.save(appointmentEntity);
    log.debug("Patient appointment created {}" , patientAppointment);
    return String.valueOf(patientAppointment.getAppointmentId());
  }

  public List<AppointmentEntity> getAppointmentByDoctorId(int doctorId){
    List<AppointmentEntity> appointmentsEntityList = appointmentRepository.findAppointmentByDoctorId(doctorId);
    log.debug("Retrieve appointment Entity by doctorID: {}" , appointmentsEntityList);
    return appointmentsEntityList;
  }
}
