package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.PersonalIdentificationEntity;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-10-19T00:47:29-0500",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 13.0.2 (Oracle Corporation)"
)
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
        patientEntity.setSymptoms( patient.getSymptoms() );
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
