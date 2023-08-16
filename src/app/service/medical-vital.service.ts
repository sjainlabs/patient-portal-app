import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PatientData} from "../model/PatientData";
import {VitalData} from "../model/VitalData";

@Injectable({
  providedIn: 'root'
})
export class MedicalVitalService {


  constructor(private http: HttpClient) { }

  private patientApiMedicalVitalUrl = '/patient/v1/vital';

  searchMedicalVitalForPatientId(id: number) : Observable<VitalData[]> {
    let url = this.patientApiMedicalVitalUrl;
    url = url+'?patientId='+id;
    return  this.http.get<any>(url);
  }

  addMedicalVitalForPatient(vitalMedicalData: VitalData, patient: PatientData){
    vitalMedicalData.patient = patient;
    const url = this.patientApiMedicalVitalUrl;
    return this.http.post(url,vitalMedicalData);
  }
}
