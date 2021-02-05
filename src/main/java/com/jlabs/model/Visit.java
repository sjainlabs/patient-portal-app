package com.jlabs.model;

import lombok.*;

import java.util.Date;

@Getter
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
@AllArgsConstructor
public class Visit {
  private int visitId;
  private int patientId;
  private String visitDate;
  private int followUpDays;
  private Date followUpDate;
  private String prescription;
  private String symptoms;
  private String diagnostics;
  private String notes;
}
