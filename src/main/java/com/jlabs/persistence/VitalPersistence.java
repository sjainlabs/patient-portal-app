package com.jlabs.persistence;

import com.jlabs.persistence.entity.VitalsEntity;
import com.jlabs.persistence.repository.VitalRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class VitalPersistence {

  private VitalRepository vitalRepository;

  @Autowired
  public VitalPersistence(VitalRepository vitalRepository) {
    this.vitalRepository = vitalRepository;
  }



  public Optional<List<VitalsEntity>> vitalMedicalInfo(int patientId){
    return vitalRepository.findVitalsByPatientId(patientId);
  }

  public String addVitalInfo(VitalsEntity vitalsMedicalEntity) {
    final VitalsEntity vitals = vitalRepository.save(vitalsMedicalEntity);
    log.debug("Visit Entity Saved {}" , vitals);
    return String.valueOf(vitals.getVitalId());
  }
}
