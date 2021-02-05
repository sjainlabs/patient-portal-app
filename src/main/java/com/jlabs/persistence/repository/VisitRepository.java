package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.VisitEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VisitRepository extends JpaRepository<VisitEntity, String> {

  public Optional<List<VisitEntity>> findByPatientId(int patientId);
}
