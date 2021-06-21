package com.jlabs.persistence;

import com.jlabs.persistence.entity.VisitEntity;
import com.jlabs.persistence.repository.VisitRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class VisitPersistence {

  private VisitRepository visitRepository;

  @Autowired
  public VisitPersistence(VisitRepository visitRepository) {this.visitRepository = visitRepository;}

  public Optional<List<VisitEntity>> visitInfo(int patientId){
    return visitRepository.findByVisitByPatientId(patientId);
  }

  public String addVisit(VisitEntity visitEntity) {
    final VisitEntity visitEntity1 = visitRepository.save(visitEntity);
    log.debug("Visit Entity Saved {}" , visitEntity);
    return String.valueOf(visitEntity.getVisitId());
  }
}
