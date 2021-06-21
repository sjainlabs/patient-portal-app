package com.jlabs.service.transform;

import com.jlabs.model.Visit;
import com.jlabs.persistence.entity.VisitEntity;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-06-21T11:54:41-0500",
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

        visitEntity.setVisitId( visit.getVisitId() );
        visitEntity.setVisitDate( visit.getVisitDate() );
        visitEntity.setFollowUpDays( visit.getFollowUpDays() );
        visitEntity.setFollowUpDate( visit.getFollowUpDate() );
        visitEntity.setPrescription( visit.getPrescription() );
        visitEntity.setSymptoms( visit.getSymptoms() );
        visitEntity.setDiagnostics( visit.getDiagnostics() );
        visitEntity.setNotes( visit.getNotes() );

        return visitEntity;
    }
}
