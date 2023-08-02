package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.model.Patient.PatientBuilder;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.PersonalIdentificationEntity;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-08-02T02:17:45-0500",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 11.0.13 (Oracle Corporation)"
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
        patientEntity.setFirstName( patient.getFirstName() );
        patientEntity.setLastName( patient.getLastName() );
        patientEntity.setDoctorName( patient.getDoctorName() );
        patientEntity.setGender( patient.getGender() );
        patientEntity.setDateOfBirth( patient.getDateOfBirth() );
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

    @Override
    public Patient PatientEntityTOPatient(PatientEntity patientEntity) {
        if ( patientEntity == null ) {
            return null;
        }

        PatientBuilder patient = Patient.builder();

        patient.personalIdType( patientEntityPersonalIdentificationEntityPersonalIdType( patientEntity ) );
        patient.id( patientEntity.getId() );
        patient.firstName( patientEntity.getFirstName() );
        patient.lastName( patientEntity.getLastName() );
        patient.doctorName( patientEntity.getDoctorName() );
        patient.dateOfBirth( patientEntity.getDateOfBirth() );
        patient.age( patientEntity.getAge() );
        patient.gender( patientEntity.getGender() );
        patient.address( patientEntity.getAddress() );
        patient.city( patientEntity.getCity() );
        patient.state( patientEntity.getState() );
        if ( patientEntity.getZipCode() != null ) {
            patient.zipCode( patientEntity.getZipCode() );
        }
        patient.contact( patientEntity.getContact() );
        patient.emergencyContact( patientEntity.getEmergencyContact() );
        patient.careOf( patientEntity.getCareOf() );
        patient.email( patientEntity.getEmail() );
        patient.weight( patientEntity.getWeight() );
        patient.height( patientEntity.getHeight() );
        patient.personalId( patientEntity.getPersonalId() );

        return patient.build();
    }

    protected PersonalIdentificationEntity patientToPersonalIdentificationEntity(Patient patient) {
        if ( patient == null ) {
            return null;
        }

        PersonalIdentificationEntity personalIdentificationEntity = new PersonalIdentificationEntity();

        personalIdentificationEntity.setPersonalIdType( patient.getPersonalIdType() );

        return personalIdentificationEntity;
    }

    private int patientEntityPersonalIdentificationEntityPersonalIdType(PatientEntity patientEntity) {
        if ( patientEntity == null ) {
            return 0;
        }
        PersonalIdentificationEntity personalIdentificationEntity = patientEntity.getPersonalIdentificationEntity();
        if ( personalIdentificationEntity == null ) {
            return 0;
        }
        int personalIdType = personalIdentificationEntity.getPersonalIdType();
        return personalIdType;
    }
}
