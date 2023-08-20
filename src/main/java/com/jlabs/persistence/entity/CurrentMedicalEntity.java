package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "CURRENT_MEDICAL_REC")
public class CurrentMedicalEntity {

  @Id
  @Column(name = "CURRENT_MEDICAL_ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int currentMedicalId;

  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "PATIENT_ID")
  private PatientEntity patientEntity;

  @Column(name = "ALLERGIES")
  private String allergies;
  @Column(name= "REFERRED_FROM")
  private String referredFrom;
  @Column(name = "CURRENT_MEDICATION")
  private String currentMedication;
  @Column(name = "CURRENT_CONCERN")
  private String currentConcern;
  @Column(name = "REASON_FOR_VISIT")
  private String reasonForVisit;
  @Column(name = "ADDITIONAL_NURSE_NOTES")
  private String additionalNurseNotes;

  @Column(name="CREATED_AT",updatable = false)
  @CreationTimestamp
  private LocalDateTime createdAt;
  @UpdateTimestamp
  @Column(name = "UPDATED_AT")
  private LocalDateTime updatedAt;

}
