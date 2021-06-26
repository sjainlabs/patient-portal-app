package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Creatd by sjain on 6/2/20.
 */

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface PatientEntityMapper {

  @Mapping(source = "personalIdType", target = "personalIdentificationEntity.personalIdType")
  @Mapping(target = "id",ignore = true)
//  @Mapping(target = "dateOfBirth",ignore = true)
  PatientEntity PatientTOPatientEntity(Patient patient);

//  @AfterMapping
//  default void afterMappingsforDateOfBirth(
//    @MappingTarget PatientEntity patientEntity, Patient patient
//  ){
//    final LocalDate of = patient.getDateOfBirth();
//    final Date dateOfBirth = Date.valueOf(of);
//    patientEntity.setDateOfBirth(dateOfBirth);
//  }



  @Mapping(target = "personalIdType", source = "personalIdentificationEntity.personalIdType")
  Patient PatientEntityTOPatient(PatientEntity patientEntity);

}
