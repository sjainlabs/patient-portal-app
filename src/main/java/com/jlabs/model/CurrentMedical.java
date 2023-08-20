package com.jlabs.model;

import lombok.*;

@Getter
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
@AllArgsConstructor
public class CurrentMedical {

    private int currentMedicalId;
    private Patient patient;
    private String allergies;
    private String referredFrom;
    private String currentMedication;
    private String currentConcern;
    private String reasonForVisit;
    private String additionalNurseNotes;

}
