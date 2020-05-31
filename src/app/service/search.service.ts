import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientData} from '../model/PatientData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private patientApiUrl = '/patient/v1';

  searchPatient(id: number): Observable<PatientData> {
    const url = this.patientApiUrl + '?id=' + id;
    return this.http.get<PatientData>(url);
  }
}
