package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import org.mapstruct.Mapper;

/**
 * Creatd by sjain on 6/2/20.
 */

@Mapper
public interface PatientEntityMapper {

    PatientEntity PatientTOPatientEntity(Patient patient);

}
