package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2020-06-07T18:04:53-0500",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_201 (Oracle Corporation)"
)
public class PatientEntityMapperImpl implements PatientEntityMapper {

    @Override
    public PatientEntity PatientTOPatientEntity(Patient patient) {
        if ( patient == null ) {
            return null;
        }

        PatientEntity patientEntity = new PatientEntity();

        patientEntity.setId( patient.getId() );
        patientEntity.setFirstName( patient.getFirstName() );
        patientEntity.setLastName( patient.getLastName() );
        patientEntity.setAge( patient.getAge() );
        patientEntity.setAddress( patient.getAddress() );
        patientEntity.setCity( patient.getCity() );
        patientEntity.setState( patient.getState() );
        patientEntity.setZipCode( patient.getZipCode() );
        patientEntity.setCareOf( patient.getCareOf() );
        patientEntity.setEmail( patient.getEmail() );
        patientEntity.setWeight( patient.getWeight() );
        patientEntity.setHeight( patient.getHeight() );
        patientEntity.setSymptoms( patient.getSymptoms() );
        patientEntity.setAdditionalNotes( patient.getAdditionalNotes() );

        return patientEntity;
    }
}
