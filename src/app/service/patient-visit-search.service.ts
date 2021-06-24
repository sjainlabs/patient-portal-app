import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VisitData} from "../model/VisitData";
import {PatientData} from "../model/PatientData";

@Injectable({
  providedIn: 'root'
})
export class PatientVisitSearchService {

  constructor(private http: HttpClient) { }

  private patientApiVisitUrl = '/patient/v1/visit';

  searchVisitForPatientId(id: number) : Observable<VisitData[]> {
    let url = this.patientApiVisitUrl;
    url = url+'?patientId='+id;
    return  this.http.get<any>(url);
  }

  addVisitForPatient(visitData: VisitData, patient: PatientData){
    visitData.patient = patient;
    const url = this.patientApiVisitUrl;
    return this.http.post(url,visitData);
  }


}
