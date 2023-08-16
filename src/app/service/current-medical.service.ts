import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VitalData} from "../model/VitalData";
import {PatientData} from "../model/PatientData";
import {CurrentMedicalData} from "../model/CurrentMedicalData";

@Injectable({
  providedIn: 'root'
})
export class CurrentMedicalService {

  constructor(private http: HttpClient) { }

  private currentMedicalUrl = '/patient/v1/current-medical';

  searchCurrentMedicalForPatientId(id: number) : Observable<CurrentMedicalData[]> {
    let url = this.currentMedicalUrl;
    url = url+'?patientId='+id;
    return  this.http.get<any>(url);
  }

  addCurrentMedicalForPatient(currentMedicalData: CurrentMedicalData, patient: PatientData){
    currentMedicalData.patient = patient;
    const url = this.currentMedicalUrl;
    return this.http.post(url,currentMedicalData);
  }
}
