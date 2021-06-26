package com.jlabs.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.Valid;
import java.time.LocalDate;

/**
 * Created by sjain on 5/25/20.
 */

@Getter
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
@AllArgsConstructor
public class Patient {

  private int id;
  private String firstName;
  private String lastName;
  private String doctorName;
  @JsonFormat(shape = JsonFormat.Shape.STRING,pattern="yyyy-MM-dd")
//  @DateTimeFormat(pattern = "yyyy-MM-dd", iso = DateTimeFormat.ISO.DATE)
//  @JsonSerialize(using = LocalDateSerializer.class)
//  @JsonDeserialize(using = LocalDateDeserializer.class)
  @Valid
  private LocalDate dateOfBirth;
  private int age;
  private String gender;
  private String address;
  private String city;
  private String state;
  private int zipCode;
  private String contact;
  private String emergencyContact;
  private String careOf;
  private String email;
  private Double weight;
  private Double height;
  private int personalIdType;
  private String personalId;
}
