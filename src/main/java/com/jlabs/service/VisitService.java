package com.jlabs.service;

import com.jlabs.model.Visit;
import com.jlabs.persistence.VisitPersistence;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.VisitEntity;
import com.jlabs.service.transform.PatientEntityMapper;
import com.jlabs.service.transform.VisitEntityMapper;
import lombok.extern.slf4j.Slf4j;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class VisitService {

  private VisitPersistence visitPersistence;
  VisitEntityMapper visitEntityMapper = Mappers.getMapper(VisitEntityMapper.class);

  @Autowired
  public VisitService(VisitPersistence visitPersistence){
    this.visitPersistence = visitPersistence;
  }

  public Optional<List<VisitEntity>> getVisit(int patientId) {
    final Optional<List<VisitEntity>> visitEntity = visitPersistence.visitInfo(patientId);
    log.debug("Patient Visit {}", visitEntity);
    return visitEntity;
  }

  public String createVisit(Visit visit) {
    VisitEntity visitEntity= visitEntityMapper.PatientTOPatientEntity(visit);
    setVisitDate(visitEntity);
    setFollowupDate(visitEntity);
    log.debug("Visit Entity {}", visitEntity);
    final String visit1 = visitPersistence.addVisit(visitEntity);
    log.debug("Patient Visit {}", visitEntity);
    return visit1;
  }

  private void setFollowupDate(VisitEntity visitEntity) {
    final LocalDateTime followUpDate = LocalDateTime.parse(visitEntity.getVisitDate()).plusDays(visitEntity.getFollowUpDays());
    visitEntity.setFollowUpDate(String.valueOf(followUpDate));
  }

  private void setVisitDate(VisitEntity visitEntity) {
    final LocalDateTime currentTime = LocalDateTime.now((ZoneOffset.UTC));
    visitEntity.setVisitDate(currentTime.toString());
  }
}
