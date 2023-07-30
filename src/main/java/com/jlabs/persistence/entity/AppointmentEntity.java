package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.ZonedDateTime;

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
  private ZonedDateTime appointmentDate;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "doctor_id")
  private DoctorEntity doctorEntity;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "patient_id")
  private PatientEntity patientEntity;
}
