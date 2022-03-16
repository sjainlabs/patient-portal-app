package com.jlabs.service.transform;

import com.jlabs.model.Appointment;
import com.jlabs.persistence.entity.AppointmentEntity;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface AppointmentEntityMapper {

  @Mapping(source = "patient.id", target = "patientEntity.id")
  @Mapping(source = "doctor.doctorId", target = "doctorEntity.doctorId")
  AppointmentEntity AppointmentToAppointmentEntity(Appointment appointment);

  @Mapping(source="patientEntity.id", target="patient.id")
  @Mapping(source="doctorEntity.doctorId", target="doctor.doctorId")
  Appointment AppointmentEntityToAppointment(AppointmentEntity appointmentEntity);
}
