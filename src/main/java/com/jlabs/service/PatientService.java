package com.jlabs.service;

import com.jlabs.model.Patient;
import com.jlabs.persistence.PatientPersistence;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.service.transform.PatientEntityMapper;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by sjain on 5/25/20.
 */

@Service
public class PatientService {

    private PatientPersistence patientPersistence;
    PatientEntityMapper patientEntityMapper = Mappers.getMapper(PatientEntityMapper.class);

  @Autowired
  public PatientService(PatientPersistence patientPersistence) {
    this.patientPersistence = patientPersistence;

  }

    public String savePatient(Patient patient){
      PatientEntity patientEntity= patientEntityMapper.PatientTOPatientEntity(patient);
//        new PatientEntity();
//        patientEntity.setFirstName(patient.getFirstName());
//      patientEntity.setLastName(patient.getLastName());
//        .build();
     return patientPersistence.savePatient(patientEntity);
    }

    public Optional<PatientEntity> searchPatient(int id) {
        return patientPersistence.searchPatient(id);
    }

    public List<Patient> searchAllPatient() {
        return patientPersistence.findAllPatient();
    }
}
