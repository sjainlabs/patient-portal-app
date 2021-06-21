import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {VisitData} from "../model/VisitData";

@Injectable({
  providedIn: 'root'
})
export class PatientVisitSearchService {

  constructor(private http: HttpClient) { }

  private patientApiVisitUrl = '/patient/v1/visit?patientId=';

  searchVisitForPatientId(id: number) : Observable<VisitData[]> {
    let url = this.patientApiVisitUrl;
    url = url+id
    return  this.http.get<any>(url);
  }


}
