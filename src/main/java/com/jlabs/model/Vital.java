package com.jlabs.model;

import lombok.*;

@Getter
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
@AllArgsConstructor
public class Vital {

    private int vitalMedicalId;
    private Patient patient;
    private String bloodPressure;
    private String temperature;
    private String weight;
    private String bmi;
    private String height;
    private String O2Saturation;
    private String pulse;


}
