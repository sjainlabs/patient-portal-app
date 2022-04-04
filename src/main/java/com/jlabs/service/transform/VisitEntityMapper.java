package com.jlabs.service.transform;

import com.jlabs.model.Visit;
import com.jlabs.persistence.entity.VisitEntity;

import net.bytebuddy.agent.builder.AgentBuilder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.time.LocalDateTime;

@Mapper(componentModel = "spring")
public interface VisitEntityMapper {

  @Mapping(source = "patient.id", target = "patientEntity.id")
  VisitEntity PatientTOPatientEntity(Visit visit);


}
