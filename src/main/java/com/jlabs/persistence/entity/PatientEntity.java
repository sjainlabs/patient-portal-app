package com.jlabs.persistence.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@Entity
@Table(name = "PATIENT")
public class PatientEntity {

  @Id
  @Column(name = "ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(name = "FIRST_NAME")
  private String firstName;
  @Column(name = "LAST_NAME")
  private String lastName;
  @Column(name = "DOCTOR_NAME")
  private String doctorName;
  @Column(name = "gender")
  private String gender;
  @Column(name = "DATE_OF_BIRTH")
  private LocalDate dateOfBirth;
  @Column(name = "AGE")
  private int age;
  @Column(name = "ADDRESS")
  private String address;
  @Column(name = "CITY")
  private String city;
  @Column(name = "STATE")
  private String state;
  @Column(name = "ZIPCODE")
  private Integer zipCode;
  @Column(name = "CONTACT")
  private String contact;
  @Column(name = "EMERGENCY_CONTACT")
  private String emergencyContact;
  @Column(name = "CARE_OF")
  private String careOf;
  @Column(name = "EMAIL")
  private String email;
  @Column(name = "WEIGHT")
  private Double weight;
  @Column(name = "HEIGHT")
  private Double height;
  @Column(name = "personal_id")
  private String personalId;
  @Transient
  @Column(name = "CREATED_AT")
  @JsonInclude()
  private String createdAt;
  @Transient
  @JsonInclude()
  @Column(name = "UPDATED_AT")
  private String updatedAt;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "personal_id_type")
  private PersonalIdentificationEntity personalIdentificationEntity;

}
