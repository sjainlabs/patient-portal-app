package com.jlabs.service;

import com.jlabs.model.Visit;
import com.jlabs.persistence.VisitPersistence;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.VisitEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class VisitService {

  private VisitPersistence visitPersistence;

  @Autowired
  public VisitService(VisitPersistence visitPersistence){
    this.visitPersistence = visitPersistence;
  }

  public Optional<List<VisitEntity>> getVisit(int patientId) {
    final Optional<List<VisitEntity>> visitEntity = visitPersistence.visitInfo(patientId);
    log.debug("Patient Visit {}", visitEntity);
    return visitEntity;
  }
}
