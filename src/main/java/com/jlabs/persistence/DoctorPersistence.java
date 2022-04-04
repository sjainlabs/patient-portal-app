package com.jlabs.persistence;

import com.jlabs.persistence.entity.DoctorEntity;
import com.jlabs.persistence.repository.DoctorRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class DoctorPersistence {

  @Autowired
  private DoctorRepository doctorRepository;

  public List<DoctorEntity> findAllDoctors(){
     List<DoctorEntity> doctorEntities = doctorRepository.findAll();
     log.debug("Retrieve Doctors for a Clinic: {}" , doctorEntities);
     return  doctorEntities;
  }


}
