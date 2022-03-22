//package com.jlabs.persistence;
//
//import com.jlabs.persistence.entity.AppointmentEntity;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.List;
//import java.util.Optional;
//
//@SpringBootTest
//public class AppointmentPersistenceTest {
//
//  @Autowired
//  public AppointmentPersistence appointmentPersistence;
//
//  @Test
//  public void getAppointmentByAppointmentIdTest() {
//    Optional<List<AppointmentEntity>> patientAppointments = appointmentPersistence.getAppointmentByAppointmentId();
//  }
//
//  @Test
//  public void getAppointmentTest() {
//    List<AppointmentEntity> patientAppointments = appointmentPersistence.getAppointments();
//  }
//}
