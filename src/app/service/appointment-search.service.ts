import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentSearchService {

  constructor(private http: HttpClient) { }

  private patientApiAppointmentUrl = '/patient/v1/appointments';

  getAllAppointments(...any): Observable<any> {
    let url = this.patientApiAppointmentUrl;

    let paramValues= ['doctorName=','appointmentDate='];
    let len=0;
    let i;
    for(i=0; i<arguments.length; i++){
      if(arguments[i] !== undefined && arguments[i] !== '' && arguments[i] !==  null){
        len++ ;

        if(len === 0 ){
          url = url;
        }
        if(len === 1 ){
          url = url + '?'+ paramValues[i]+arguments[i];
        }
        else if(len > 1){
          url = url +'&'+ paramValues[i]+arguments[i];
        }
      }
    }
    console.log(url);
    return this.http.get<any>(url);
  }

  createAppointment(appointment: any): Observable<any> {
    const url = this.patientApiAppointmentUrl;
    return this.http.post(url,appointment);
  }
}
