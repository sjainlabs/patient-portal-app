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
@Table(name = "VITAL")
public class VitalsEntity {

  @Id
  @Column(name = "VITAL_ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int vitalId;

  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "PATIENT_ID")
  private PatientEntity patientEntity;

  @Column(name= "BLOOD_PRESSURE")
  private String bloodPressure;
  @Column(name = "TEMPERATURE")
  private String temperature;
  @Column(name= "WEIGHT")
  private String weight;
  @Column(name = "BMI")
  private String bmi;
  @Column(name = "HEIGHT")
  private String height;
  @Column(name = "O2Saturation")
  private String O2Saturation;
  @Column(name = "PULSE")
  private String pulse;
  @Column(name="CREATED_AT",updatable = false)
  @CreationTimestamp
  private LocalDateTime createdAt;
  @UpdateTimestamp
  @Column(name = "UPDATED_AT")
  private LocalDateTime updatedAt;

}
