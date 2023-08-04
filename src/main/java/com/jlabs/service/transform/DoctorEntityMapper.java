package com.jlabs.service.transform;

import com.jlabs.model.Doctor;
import com.jlabs.model.Visit;
import com.jlabs.persistence.entity.DoctorEntity;
import com.jlabs.persistence.entity.VisitEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface DoctorEntityMapper {

  Doctor DoctorEntityToDoctor(DoctorEntity doctorEntity);


}
