import { Injectable } from '@angular/core';
import {PatientData} from "../model/PatientData";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientRegistrationService {

  constructor(private http: HttpClient) { }

  private patientApiUrl = '/patient/v1';

  addPatient(patient: any): Observable<any> {
    const url = this.patientApiUrl;
    return this.http.post(url,patient);
  }
}
