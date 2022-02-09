package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "doctor")
public class DoctorEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "doctor_id")
  private int doctorId;
  @Column(name = "doctor_name")
  private String doctorName;
  @ManyToOne
  @JoinColumn(name = "personal_id_type")
  private PersonalIdentificationEntity personalIdentificationEntity;
  @Column(name = "personal_id")
  private String personalId;
}
