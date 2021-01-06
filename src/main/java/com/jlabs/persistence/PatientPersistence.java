package com.jlabs.persistence;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.PersonalIdentificationEntity;
import com.jlabs.persistence.repository.PatientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@Service
public class PatientPersistence {

     @PersistenceContext
     private EntityManager entityManager;

    private PatientRepository patientRepository;

    @Autowired
    public PatientPersistence(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public String savePatient(PatientEntity patientEntity){

       entityManager.find(PersonalIdentificationEntity.class, patientEntity.getPersonalIdentificationEntity().getPersonalIdType());
//      patientEntity.setPersonalIdentificationEntity(personalIdentificationEntity);
      final PatientEntity save = patientRepository.save(patientEntity);
      log.debug("Patient Entity Saved {}" , save);
      return String.valueOf(save.getId());
    }

    public List<Patient> findAllPatient(){
        List<PatientEntity> patientEntityList = patientRepository.findAll();
        return patientEntityList.stream()
                .map(patientEntity -> patientEntityToPatientMapper(patientEntity))
                .collect(Collectors.toList());
    }

    private Patient patientEntityToPatientMapper(PatientEntity patientEntity){
        return Patient.builder()
                .firstName(patientEntity.getFirstName())
                .lastName(patientEntity.getLastName())
                 .age(patientEntity.getAge())
                .build();
    }

    public Optional<List<PatientEntity>> searchPatient(Integer id, String firstName, String lastName){
        return patientRepository.findPatient(id, firstName, lastName);
    }
}
