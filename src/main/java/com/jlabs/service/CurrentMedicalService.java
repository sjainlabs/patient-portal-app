package com.jlabs.service;

import com.jlabs.model.CurrentMedical;
import com.jlabs.model.Vital;
import com.jlabs.persistence.CurrentMedicalPersistence;
import com.jlabs.persistence.VitalPersistence;
import com.jlabs.persistence.entity.CurrentMedicalEntity;
import com.jlabs.persistence.entity.VitalsEntity;
import com.jlabs.service.transform.CurrentMedicalEntityMapper;
import com.jlabs.service.transform.VitalEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class CurrentMedicalService {

  private CurrentMedicalPersistence currentMedicalPersistence;
  CurrentMedicalEntityMapper currentMedicalEntityMapper = Mappers.getMapper(CurrentMedicalEntityMapper.class);

  @Autowired
  public CurrentMedicalService(CurrentMedicalPersistence currentMedicalPersistence) {
    this.currentMedicalPersistence = currentMedicalPersistence;
  }

  public Optional<List<CurrentMedicalEntity>> getCurrentMedical(int patientId) {
    final Optional<List<CurrentMedicalEntity>> currentMedicalEntities = currentMedicalPersistence.currentMedicalInfo(patientId);
    log.debug("Patient Current Medical Info {}", currentMedicalEntities);
    return currentMedicalEntities;
  }

  public String createCurrentMedical(CurrentMedical currentMedical) {
    CurrentMedicalEntity currentMedicalEntity= currentMedicalEntityMapper.PatientTOPatientEntity(currentMedical);

    log.debug("VitalsMedicalEntity Entity {}", currentMedicalEntity);
    final String currentMedicalInfo = currentMedicalPersistence.addCurrentMedicalInfo(currentMedicalEntity);
    log.debug("Patient Current Medical Info Saved ID : {}", currentMedicalInfo);
    return currentMedicalInfo;
  }


}
