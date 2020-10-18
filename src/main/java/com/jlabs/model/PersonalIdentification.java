package com.jlabs.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
@AllArgsConstructor
public class PersonalIdentification {

  private int personalIdType;
  private String personalIdTypeDesc;

}
