package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository extends JpaRepository<AppointmentEntity, String> {

}
