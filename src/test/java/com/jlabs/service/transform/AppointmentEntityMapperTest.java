package com.jlabs.service.transform;
import com.jlabs.model.Appointment;
import com.jlabs.persistence.entity.AppointmentEntity;
import com.jlabs.service.transform.AppointmentEntityMapper;
import lombok.extern.slf4j.Slf4j;
//import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Test;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.ZonedDateTime;

@Slf4j
@SpringBootTest
class AppointmentEntityMapperTest {

//  AppointmentEntityMapper appointmentEntityMapper = Mappers.getMapper(AppointmentEntityMapper.class);
  @Autowired
  AppointmentEntityMapper appointmentEntityMapper;

 @Test
 void convertAppointmentTimeToUTCTest() {
    Appointment appointment = new Appointment();
    final ZonedDateTime zonedDateTime = ZonedDateTime.parse("2022-03-21T00:00:00-06:00");
    appointment.setAppointmentDate(zonedDateTime);
    final ZonedDateTime appointmentDate = appointment.getAppointmentDate();
    log.info(appointmentDate.toString());
//    appointmentEntityMapper.convertAppointmentTimeToUTC(appointment);
    final ZonedDateTime appointmentDateConverted = appointment.getAppointmentDate();
    log.info(appointmentDateConverted.toString());
  }

 @Test
  void convertAppointmentTimeFromUTC() {
    AppointmentEntity appointmentEntity = new AppointmentEntity();
    final ZonedDateTime zonedDateTime = ZonedDateTime.parse("2022-03-21T06:00Z[UTC]");
    appointmentEntity.setAppointmentDate(zonedDateTime);
    final ZonedDateTime appointmentDate = appointmentEntity.getAppointmentDate();
    log.info(appointmentDate.toString());
//    appointmentEntityMapper.convertAppointmentTimeFromUTC(appointmentEntity);
    final ZonedDateTime appointmentDateConverted = appointmentEntity.getAppointmentDate();
    log.info(appointmentDateConverted.toString());


  }
}
