package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AppointmentRepository extends JpaRepository<AppointmentEntity, String> {

  @Query("select appointment from AppointmentEntity appointment where ( :id is null or appointment.appointmentId= :id)")
  public Optional<List<AppointmentEntity>> findAppointmentByAppointmentId(@Param("id") Integer id);

  @Query("select appointment from AppointmentEntity appointment where ( :doctorId is null or appointment.doctorEntity.doctorId= :doctorId)")
  public List<AppointmentEntity> findAppointmentByDoctorId(@Param("doctorId") Integer doctorId);
}
