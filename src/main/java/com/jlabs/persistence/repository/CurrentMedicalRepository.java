package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.CurrentMedicalEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CurrentMedicalRepository extends JpaRepository<CurrentMedicalEntity, String> {

  @Query(" select v from CurrentMedicalEntity v  where ( :id is null or v.patientEntity.id = :id)")
  public Optional<List<CurrentMedicalEntity>> findCurrentMedicalRecordByPatientId(@Param("id") Integer id);
}
