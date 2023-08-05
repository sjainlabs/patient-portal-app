package com.jlabs.service;

import com.jlabs.model.Appointment;
import com.jlabs.persistence.AppointmentPersistence;
import com.jlabs.persistence.entity.AppointmentEntity;
import com.jlabs.service.transform.AppointmentEntityMapper;
//import jdk.nashorn.internal.runtime.regexp.joni.constants.OPCode;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AppointmentService {

  @Autowired
  private AppointmentPersistence appointmentPersistence;
  AppointmentEntityMapper appointmentEntityMapper = Mappers.getMapper(AppointmentEntityMapper.class);

  public Optional<List<Appointment>> getAppointments(String doctorName, String appointmentDate){
    Optional<List<AppointmentEntity>> patientAppointments = Optional.empty();
    if(doctorName == null && appointmentDate == null){
       patientAppointments = Optional.ofNullable(appointmentPersistence.getAllAppointments());
    }
    else{
      patientAppointments = Optional.ofNullable(appointmentPersistence.getAppointmentByDoctorNameOrAppointmentDate(doctorName, LocalDate.parse(appointmentDate)));
    }
    List<Appointment> appointmentsList = new ArrayList<>();
    if(!patientAppointments.get().isEmpty()) {
      log.info("Retrieved all appointments: {}" , patientAppointments);
      for (AppointmentEntity appointmentEntity: patientAppointments.get()) {
        Appointment appointment = appointmentEntityMapper.AppointmentEntityToAppointment(appointmentEntity);
        appointmentsList.add(appointment);
      }
    }
    return Optional.ofNullable(appointmentsList);
  }

  public String createAppointments(Appointment appointment){
    AppointmentEntity appointmentEntity = appointmentEntityMapper.AppointmentToAppointmentEntity(appointment);
    String patientAppointmentId = appointmentPersistence.createAppointments(appointmentEntity);
    log.info("Created patient appointment with appointment Id: {}" , patientAppointmentId);
    return patientAppointmentId;
  }

  public List<Appointment> getAppointmentsByDoctorId(int doctorId){
    List<AppointmentEntity> appointmentsEntityList = appointmentPersistence.getAppointmentByDoctorId(doctorId);
    List<Appointment> appointmentsList = new ArrayList<>();
    if(!appointmentsEntityList.isEmpty()) {
      for (AppointmentEntity appointmentEntity: appointmentsEntityList) {
        Appointment appointment = appointmentEntityMapper.AppointmentEntityToAppointment(appointmentEntity);
        appointmentsList.add(appointment);
      }
    }
    log.info("Retrieve appointments by doctorId: {}" , appointmentsList);
    return appointmentsList;
  }
}
