package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.PersonalIdentificationEntity;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-06-19T18:26:37-0500",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_282 (Azul Systems, Inc.)"
)
@Component
public class PatientEntityMapperImpl implements PatientEntityMapper {

    @Override
    public PatientEntity PatientTOPatientEntity(Patient patient) {
        if ( patient == null ) {
            return null;
        }

        PatientEntity patientEntity = new PatientEntity();

        patientEntity.setPersonalIdentificationEntity( patientToPersonalIdentificationEntity( patient ) );
        patientEntity.setId( patient.getId() );
        patientEntity.setFirstName( patient.getFirstName() );
        patientEntity.setLastName( patient.getLastName() );
        patientEntity.setDoctorName( patient.getDoctorName() );
        patientEntity.setGender( patient.getGender() );
        patientEntity.setAge( patient.getAge() );
        patientEntity.setAddress( patient.getAddress() );
        patientEntity.setCity( patient.getCity() );
        patientEntity.setState( patient.getState() );
        patientEntity.setZipCode( patient.getZipCode() );
        patientEntity.setContact( patient.getContact() );
        patientEntity.setEmergencyContact( patient.getEmergencyContact() );
        patientEntity.setCareOf( patient.getCareOf() );
        patientEntity.setEmail( patient.getEmail() );
        patientEntity.setWeight( patient.getWeight() );
        patientEntity.setHeight( patient.getHeight() );
        patientEntity.setPersonalId( patient.getPersonalId() );

        return patientEntity;
    }

    protected PersonalIdentificationEntity patientToPersonalIdentificationEntity(Patient patient) {
        if ( patient == null ) {
            return null;
        }

        PersonalIdentificationEntity personalIdentificationEntity = new PersonalIdentificationEntity();

        personalIdentificationEntity.setPersonalIdType( patient.getPersonalIdType() );

        return personalIdentificationEntity;
    }
}
