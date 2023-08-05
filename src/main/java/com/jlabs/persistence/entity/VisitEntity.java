package com.jlabs.persistence.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.jlabs.model.Patient;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "VISITS")
public class VisitEntity {

  @Id
  @Column(name = "VISIT_ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int visitId;

  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "PATIENT_ID")
  private PatientEntity patientEntity;


  @Column(name= "VISIT_DATE")
  private String visitDate;
  @Column(name = "FOLLOW_UP_DAYS")
  private int followUpDays;
  @Column(name= "FOLLOW_UP_DATE")
  private String followUpDate;
  @Column(name = "PRESCRIPTION")
  private String prescription;
  @Column(name = "SYMPTONS")
  private String symptoms;
  @Column(name = "DIAGNOSTICS")
  private String diagnostics;
  @Column(name = "NOTES")
  private String notes;
  @Transient
  @JsonInclude()
  @Column(name = "UPDATED_AT")
  private String updatedAt;
}
