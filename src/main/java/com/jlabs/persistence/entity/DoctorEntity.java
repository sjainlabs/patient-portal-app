package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "DOCTOR")
public class DoctorEntity {

  @Id
  @Column(name = "doctor_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int doctorId;
  @Column(name = "doctor_name")
  private String doctorName;
  @Column(name = "personal_id")
  private String personalId;
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "personal_id_type")
  private PersonalIdentificationEntity personalIdentificationEntity;
}
