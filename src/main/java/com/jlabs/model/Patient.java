package com.jlabs.model;

import lombok.*;

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
