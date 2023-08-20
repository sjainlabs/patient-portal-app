package com.jlabs.persistence;

import com.jlabs.model.CurrentMedical;
import com.jlabs.persistence.entity.CurrentMedicalEntity;
import com.jlabs.persistence.entity.VitalsEntity;
import com.jlabs.persistence.repository.CurrentMedicalRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class CurrentMedicalPersistence {

  private CurrentMedicalRepository currentMedicalRepository;

  @Autowired
  public CurrentMedicalPersistence(CurrentMedicalRepository currentMedicalRepository) {
    this.currentMedicalRepository = currentMedicalRepository;
  }


  public Optional<List<CurrentMedicalEntity>> currentMedicalInfo(int patientId){
    return currentMedicalRepository.findCurrentMedicalRecordByPatientId(patientId);
  }

  public String addCurrentMedicalInfo(CurrentMedicalEntity currentMedicalEntity) {
   final CurrentMedicalEntity medicalEntity = currentMedicalRepository.save(currentMedicalEntity);
    log.debug("CurrentMedical Entity Saved {}" , medicalEntity);
    return String.valueOf(medicalEntity.getCurrentMedicalId());
  }
}
