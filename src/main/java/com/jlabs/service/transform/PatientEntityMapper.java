package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.PersonalIdentificationEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

/**
 * Creatd by sjain on 6/2/20.
 */

@Mapper
public interface PatientEntityMapper {

  @Mapping(source = "personalIdType", target = "personalIdentificationEntity.personalIdType")
  @Mapping(source = "personalIdTypeDesc", target = "personalIdentificationEntity.personalIdTypeDesc")
    PatientEntity PatientTOPatientEntity(Patient patient);


}
