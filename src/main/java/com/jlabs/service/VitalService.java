package com.jlabs.service;

import com.jlabs.model.Vital;
import com.jlabs.persistence.VitalPersistence;
import com.jlabs.persistence.entity.VitalsEntity;
import com.jlabs.service.transform.VitalEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class VitalService {

  private VitalPersistence vitalPersistence;
  VitalEntityMapper vitalEntityMapper = Mappers.getMapper(VitalEntityMapper.class);

  @Autowired
  public VitalService(VitalPersistence vitalPersistence  ) {
    this.vitalPersistence = vitalPersistence;
  }

  public Optional<List<VitalsEntity>> getVitalMedical(int patientId) {
    final Optional<List<VitalsEntity>> vitalMedicalInfo = vitalPersistence.vitalMedicalInfo(patientId);
    log.debug("Patient Vital Medical Info {}", vitalMedicalInfo);
    return vitalMedicalInfo;
  }

  public String createVitalMedical(Vital vital) {
    VitalsEntity vitalsMedicalEntity= vitalEntityMapper.PatientTOPatientEntity(vital);

    log.debug("VitalsMedicalEntity Entity {}", vitalsMedicalEntity);
    final String addVitalInfo = vitalPersistence.addVitalInfo(vitalsMedicalEntity);
    log.debug("Patient Vital Medical Info Saved ID : {}", addVitalInfo);
    return addVitalInfo;
  }


}
