package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.VisitEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VisitRepository extends JpaRepository<VisitEntity, String> {

  @Query(" select v from VisitEntity v  where ( :id is null or v.patientEntity.id = :id)")
  public Optional<List<VisitEntity>> findByVisitByPatientId(int id);
}
