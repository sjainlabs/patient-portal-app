package com.jlabs.service;

import com.jlabs.persistence.entity.AppointmentEntity;
import com.jlabs.persistence.repository.AppointmentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class AppointmentService {

  @Autowired
  private AppointmentRepository appointmentRepository;

  public List<AppointmentEntity> getAllAppointments(){
    List<AppointmentEntity> appointmentEntityList = appointmentRepository.findAll();
    log.debug("Appointment Entity {}", appointmentEntityList);
    return appointmentEntityList;
  }
}
