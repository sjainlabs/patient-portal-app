package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.PatientAppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PatientAppointmentRepository extends JpaRepository<PatientAppointmentEntity, String> {

  @Query("select appointment from PatientAppointmentEntity appointment where ( :id is null or appointment.appointmentId= :id)")
  public Optional<List<PatientAppointmentEntity>> findAppointmentByAppointmentId(@Param("id") Integer id);
}
