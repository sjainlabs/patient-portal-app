package com.jlabs.persistence.repository;

import com.jlabs.persistence.entity.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<PatientEntity, String> {

  public Optional<PatientEntity> findById(int id);

  public Optional<List<PatientEntity>> findByIdAndFirstNameAndLastName(Integer id, String firstName, String lastName);

  @Query(" select p from PatientEntity p where ( :id is null or  p.id = :id)" +
    " and ( :firstName is null or  p.firstName = :firstName) " +
    "and (( :lastName is null or  p.lastName = :lastName) )" +
    "and (( :contact is null or  p.contact = :contact) )" +
    "and (( :personalId is null or  p.personalId = :personalId) )" +
    "and (( :dateOfBirth is null or  p.dateOfBirth = :dateOfBirth) )"
  )
//      +      " and ( :firstName is null or p.firstName  = :firstName ) and (:lastName is null or p.lasttName = :lastName)")
  public Optional<List<PatientEntity>> findPatient(@Param("id") Integer id,
                                                   @Param("firstName") String firstName,
                                                   @Param("lastName") String lastName,
                                                   @Param("contact") String contact,
                                                   @Param("personalId") String personalId,
                                                   @Param("dateOfBirth") LocalDate dateOfBirth
                                                   );
}
