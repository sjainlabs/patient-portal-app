package com.jlabs.persistence;

import com.jlabs.persistence.entity.PatientAppointmentEntity;
import com.jlabs.persistence.repository.PatientAppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientAppointmentPersistence {

  @Autowired
  private PatientAppointmentRepository patientAppointmentRepository;

  public Optional<List<PatientAppointmentEntity>> getAppointmentByAppointmentId(){
     Optional<List<PatientAppointmentEntity>> patientAppointments = patientAppointmentRepository.findAppointmentByAppointmentId(1);
     return patientAppointments;
  }

  public List<PatientAppointmentEntity> getAppointment(){
    List<PatientAppointmentEntity> patientAppointments = patientAppointmentRepository.findAll();
    return patientAppointments;
  }
}
