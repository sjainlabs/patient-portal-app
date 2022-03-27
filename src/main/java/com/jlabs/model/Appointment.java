package com.jlabs.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.ZonedDateTimeSerializer;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Date;

@Getter
@Setter
@ToString
public class Appointment {

  private int appointmentId;
  //  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSz")
//  @JsonSerialize(using = ZonedDateTimeSerializer.class)
//  @JsonDeserialize(using = ZonedDateTimeDeserializer.class) // Doesn't exist, So I created a custom ZonedDateDeserializer utility class.
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-M-d")
  private LocalDate appointmentDate;
  @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-M-d HH:mm:ss")
  private LocalDateTime startTime;
  @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "HH:mm:ss")
  private LocalDateTime endTime;
  private String timeZone;
  private Patient patient;
  private Doctor doctor;

}
