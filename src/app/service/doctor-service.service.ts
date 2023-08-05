import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DoctorData} from "../model/DoctorData";

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http: HttpClient) { }

  private doctorApiUrl = '/doctor/v1';

  searchAllDoctors() : Observable<DoctorData[]> {
    let url = this.doctorApiUrl+ "/doctors";
     return  this.http.get<any>(url);
  }

}
