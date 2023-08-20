package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.VitalsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VitalRepository extends JpaRepository<VitalsEntity, String> {

  @Query(" select v from VitalsEntity v  where ( :id is null or v.patientEntity.id = :id)")
  public Optional<List<VitalsEntity>> findVitalsByPatientId(@Param("id") Integer id);
}
