import {PatientData} from "./PatientData";

export class VitalData {


  patient: PatientData;
  bloodPressure: string;
  temperature: string;
  weight: string;
  bmi: string;
  height: string;
  O2Saturation: string;
  pulse: string;


  constructor(patient: PatientData, bloodPressure: string, temperature: string , weight: string, bmi: string, height: string, O2Saturation: string, pulse: string) {
    this.patient = patient;
    this.bloodPressure = bloodPressure;
    this.temperature = temperature;
    this.weight = weight;
    this.bmi = bmi;
    this.height = height;
    this.O2Saturation = O2Saturation;
    this.pulse = pulse;
  }
}
