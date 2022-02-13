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
public class PatientAppointmentEntity {

  @Id
  @Column(name = "appointment_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int appointmentId;

  @Column(name = "appointment_date")
  private Date appointmentDate;

  @OneToOne
  @JoinColumn(name = "doctor_id")
  private DoctorEntity doctorId;

  @OneToOne
  @JoinColumn(name = "patient_id")
  private PatientEntity patientId;
}
