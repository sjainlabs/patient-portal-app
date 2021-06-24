package com.jlabs.service.transform;

import com.jlabs.model.Patient;
import com.jlabs.model.Visit;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.VisitEntity;
import java.text.SimpleDateFormat;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-06-23T18:55:12-0500",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 1.8.0_282 (Azul Systems, Inc.)"
)
@Component
public class VisitEntityMapperImpl implements VisitEntityMapper {

    @Override
    public VisitEntity PatientTOPatientEntity(Visit visit) {
        if ( visit == null ) {
            return null;
        }

        VisitEntity visitEntity = new VisitEntity();

        visitEntity.setPatientEntity( patientToPatientEntity( visit.getPatient() ) );
        visitEntity.setVisitId( visit.getVisitId() );
        visitEntity.setVisitDate( visit.getVisitDate() );
        visitEntity.setFollowUpDays( visit.getFollowUpDays() );
        if ( visit.getFollowUpDate() != null ) {
            visitEntity.setFollowUpDate( new SimpleDateFormat().format( visit.getFollowUpDate() ) );
        }
        visitEntity.setPrescription( visit.getPrescription() );
        visitEntity.setSymptoms( visit.getSymptoms() );
        visitEntity.setDiagnostics( visit.getDiagnostics() );
        visitEntity.setNotes( visit.getNotes() );

        return visitEntity;
    }

    protected PatientEntity patientToPatientEntity(Patient patient) {
        if ( patient == null ) {
            return null;
        }

        PatientEntity patientEntity = new PatientEntity();

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
}
