package com.jlabs.service.transform;

import com.jlabs.model.Appointment;
import com.jlabs.persistence.entity.AppointmentEntity;
import org.mapstruct.*;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface AppointmentEntityMapper {

  @Mapping(source = "patient.id", target = "patientEntity.id")
  @Mapping(source = "doctor.doctorId", target = "doctorEntity.doctorId")
  @Mapping(target = "appointmentId",ignore = true)
  AppointmentEntity AppointmentToAppointmentEntity(Appointment appointment);

//  @BeforeMapping
//  default void convertAppointmentTimeToUTC( Appointment appointment) {
//    final ZonedDateTime appointmentDateSource = appointment.getAppointmentDate();
//    final ZonedDateTime appointmentDateUTC = appointmentDateSource.withZoneSameInstant(ZoneId.of("UTC"));
//    appointment.setAppointmentDate(appointmentDateUTC);
//
//
//  }


  @Mapping(source="patientEntity.id", target="patient.id")
  @Mapping(source="doctorEntity.doctorId", target="doctor.doctorId")
  Appointment AppointmentEntityToAppointment(AppointmentEntity appointmentEntity);

//  @BeforeMapping
//  default void convertAppointmentTimeFromUTC( AppointmentEntity appointmentEntity) {
//    final ZonedDateTime appointmentDateSource = appointmentEntity.getAppointmentDate();
//    final ZoneId defaultZoneId = ZonedDateTime.now().getZone();
//    final ZonedDateTime appointmentDateToDefaultZone = appointmentDateSource.withZoneSameInstant(defaultZoneId);
//    appointmentEntity.setAppointmentDate(appointmentDateToDefaultZone);
//
//  }
}
