package com.jlabs.persistence;

import com.jlabs.persistence.entity.PatientAppointmentEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

@SpringBootTest
public class PatientAppointmentEntityPersistenceTest {

  @Autowired
  public PatientAppointmentPersistence patientAppointmentPersistence;

  @Test
  public void getAppointmentByAppointmentIdTest() {
    Optional<List<PatientAppointmentEntity>> patientAppointments = patientAppointmentPersistence.getAppointmentByAppointmentId();
  }

  @Test
  public void getAppointmentTest() {
    List<PatientAppointmentEntity> patientAppointments = patientAppointmentPersistence.getAppointment();
  }
}
