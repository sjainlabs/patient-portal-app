package com.jlabs.persistence;

import com.jlabs.persistence.entity.VisitEntity;
import com.jlabs.persistence.repository.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VisitPersistence {

  private VisitRepository visitRepository;

  @Autowired
  public VisitPersistence(VisitRepository visitRepository) {this.visitRepository = visitRepository;}

  public Optional<List<VisitEntity>> visitInfo(int patientId){
    return visitRepository.findByPatientId(patientId);
  }
}
