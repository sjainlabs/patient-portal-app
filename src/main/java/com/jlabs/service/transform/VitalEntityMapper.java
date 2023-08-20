package com.jlabs.service.transform;

import com.jlabs.model.CurrentMedical;
import com.jlabs.model.Vital;
import com.jlabs.persistence.entity.VitalsEntity;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface VitalEntityMapper {

  @Mapping(source = "patient.id", target = "patientEntity.id")
  VitalsEntity PatientTOPatientEntity(Vital vital);


}
