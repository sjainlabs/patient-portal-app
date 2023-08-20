import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VitalData} from "../model/VitalData";
import {PatientData} from "../model/PatientData";

@Injectable({
  providedIn: 'root'
})
export class VitalService {

  constructor(private http: HttpClient) { }

  private patientApiVitalUrl = '/patient/v1/vital';

  searchVitalForPatientId(id: number) : Observable<VitalData[]> {
    let url = this.patientApiVitalUrl;
    url = url+'?patientId='+id;
    return  this.http.get<any>(url);
  }

  addVitalForPatient(vitalData: VitalData, patient: PatientData){
    vitalData.patient = patient;
    const url = this.patientApiVitalUrl;
    return this.http.post(url,vitalData);
  }
}
