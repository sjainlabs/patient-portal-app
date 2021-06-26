package com.jlabs.service;

import com.jlabs.model.Patient;
import com.jlabs.model.Visit;
import com.jlabs.persistence.PatientPersistence;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.service.transform.PatientEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by sjain on 5/25/20.
 */

@Slf4j
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
      log.debug("Patient Entity {}", patientEntity);
//        new PatientEntity();
//        patientEntity.setFirstName(patient.getFirstName());
//      patientEntity.setLastName(patient.getLastName());
//        .build();
     return patientPersistence.savePatient(patientEntity);
    }

    public Optional<List<Patient>> searchPatient(Integer id, String firstName, String lastName) {

      final Optional<List<PatientEntity>> patientEntity = patientPersistence.searchPatient(id,firstName,lastName);
      log.debug("searched patient {}", patientEntity);
      final List<Patient> patients = patientEntity.get().stream().map(patientEntity1 -> {
        return patientEntityMapper.PatientEntityTOPatient(patientEntity1);

      }).collect(Collectors.toList());
//      Patient patient= patientEntityMapper.PatientEntityTOPatient(patientEntity);

      return Optional.ofNullable(patients);
    }

    public List<Patient> searchAllPatient() {
        return patientPersistence.findAllPatient();
    }
}
