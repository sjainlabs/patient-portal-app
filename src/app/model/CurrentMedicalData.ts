import {PatientData} from "./PatientData";

export class CurrentMedicalData {


  patient: PatientData;
  allergies: string;
  referredFrom: string;
  currentMedication: string;
  currentConcern: string;
  reasonForVisit: string;
  additionalNurseNotes: string;


  constructor(patient: PatientData, allergies: string, referredFrom: string, currentMedication: string, currentConcern: string, reasonForVisit: string, additionalNurseNotes: string) {
    this.patient = patient;
    this.allergies = allergies;
    this.referredFrom = referredFrom;
    this.currentMedication = currentMedication;
    this.currentConcern = currentConcern;
    this.reasonForVisit = reasonForVisit;
    this.additionalNurseNotes = additionalNurseNotes;
  }
}
