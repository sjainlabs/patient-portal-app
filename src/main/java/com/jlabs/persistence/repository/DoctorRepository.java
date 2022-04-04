package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.DoctorEntity;
import com.jlabs.persistence.entity.VisitEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<DoctorEntity, String> {


}
