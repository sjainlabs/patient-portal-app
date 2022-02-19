package com.jlabs.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
@ToString
public class Appointment {

  private int appointmentId;
  private Date appointmentDate;
  private Patient patient;
  private Doctor doctor;

}
