package com.jlabs.persistence.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@ToString
@Entity
@Table(name =  "patient_appointment")
public class AppointmentEntity {

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "patient_id", referencedColumnName = "id")
  private PatientEntity patientEntity;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "doctor_id", referencedColumnName = "doctor_id")
  private DoctorEntity doctorEntity;
  @Column(name = "appointment_date")
//  @JsonSerializealize(using=JsonDateSerializer.class)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm:ss")
  private Date appointmentDate;
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "appointment_id")
  private int appointmentId;
}
