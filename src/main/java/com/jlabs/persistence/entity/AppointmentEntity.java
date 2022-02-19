package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@ToString
@Entity
@Table(name = "patient_appointment")
public class AppointmentEntity {

  @Id
  @Column(name = "appointment_id")
  private int appointmentId;

  @Column(name = "appointment_date")
  private Date appointmentDate;

  @OneToOne
  @JoinColumn(name = "doctor_id")
  private DoctorEntity doctorEntity;

  @OneToOne
  @JoinColumn(name = "patient_id")
  private PatientEntity patientEntity;
}
