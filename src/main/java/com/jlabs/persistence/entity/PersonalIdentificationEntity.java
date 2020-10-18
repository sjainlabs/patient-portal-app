package com.jlabs.persistence.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "PERSONAL_IDENTIFICATION")
public class PersonalIdentificationEntity {

  @Id
  @Column(name = "personal_id_type")
  private int personalIdType;
  @Column(name = "personal_id_type_desc")
  private String personalIdTypeDesc;

}
