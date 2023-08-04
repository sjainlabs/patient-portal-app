package com.jlabs.service;

import com.jlabs.model.Doctor;
import com.jlabs.persistence.DoctorPersistence;
import com.jlabs.persistence.entity.DoctorEntity;
import com.jlabs.service.transform.DoctorEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class DoctorService {

  @Autowired
  private DoctorPersistence doctorPersistence;
  DoctorEntityMapper doctorEntityMapper = Mappers.getMapper(DoctorEntityMapper.class);
//

  public Optional<List<Doctor>> getAllDoctors(){
    List<DoctorEntity> doctorEntities = doctorPersistence.findAllDoctors();
    List<Doctor> doctorList = new ArrayList<>();
    if(!doctorEntities.isEmpty()) {
      for (DoctorEntity doctorEntity: doctorEntities) {
        Doctor doctor = doctorEntityMapper.DoctorEntityToDoctor(doctorEntity);
        doctorList.add(doctor);
      }
    }
    log.debug("Retrieve All Doctors: {}" , doctorList);
    return Optional.ofNullable(doctorList);
  }
}
