package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Entity
@Table(name = "patient_appointment")
public class AppointmentEntity {

  @Id
  @Column(name = "appointment_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int appointmentId;

  @Column(name = "appointment_date")
  private LocalDate appointmentDate;

  @Column(name = "start_time")
  private LocalDateTime startTime;

  @Column(name = "end_time")
  private LocalDateTime endTime;

  @Column(name = "time_zone")
  private String timeZone;

  @OneToOne
  @JoinColumn(name = "doctor_id")
  private DoctorEntity doctorEntity;

  @OneToOne
  @JoinColumn(name = "patient_id")
  private PatientEntity patientEntity;
}
