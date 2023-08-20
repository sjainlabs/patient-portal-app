package com.jlabs.service.transform;

import com.jlabs.model.CurrentMedical;
import com.jlabs.persistence.entity.CurrentMedicalEntity;
import com.jlabs.persistence.entity.VitalsEntity;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface CurrentMedicalEntityMapper {

  @Mapping(source = "patient.id", target = "patientEntity.id")
  CurrentMedicalEntity PatientTOPatientEntity(CurrentMedical currentMedical);


}
