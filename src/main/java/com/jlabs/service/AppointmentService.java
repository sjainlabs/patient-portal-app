package com.jlabs.service;

import com.jlabs.model.Appointment;
import com.jlabs.persistence.AppointmentPersistence;
import com.jlabs.persistence.entity.AppointmentEntity;
import com.jlabs.service.transform.AppointmentEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AppointmentService {

  @Autowired
  private AppointmentPersistence appointmentPersistence;
  AppointmentEntityMapper appointmentEntityMapper = Mappers.getMapper(AppointmentEntityMapper.class);

  public Optional<List<AppointmentEntity>> getAllAppointments(){
    Optional<List<AppointmentEntity>> patientAppointments = Optional.ofNullable(appointmentPersistence.getAllAppointments());
    log.info("Retrieve all appointments: {}" , patientAppointments);
    return patientAppointments;
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
