import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientData} from '../model/PatientData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  private patientApiUrl = '/patient/v1?';

  searchPatient(id: number, firstName: string, lastName:
    string, contact: number, personalId: string, dateOfBirth: any): Observable<PatientData[]> {

    let url = this.patientApiUrl;
    let len=0;
    let i;

    let paramValues= ['id=','firstName=','lastName=','contact=','personalId=','dateOfBirth='];

    for(i=0; i<arguments.length; i++){
      if(arguments[i] !== undefined && arguments[i] !== '' && arguments[i] !==  null){
        len++ ;

        if(len === 0){
          url = url +paramValues[i]+arguments[i];
        }else if(len > 0){
          url = url +'&'+ paramValues[i]+arguments[i];
        }
      }
    }
    // if(len === 1){
    //   url = url + paramValues[0]+arguments[0];
    //
    // }
    // if(len === 2){
    //   url = url + paramValues[0] +arguments[0]+ paramValues[1] + arguments[1];
    //
    // }
    // if(len === 3){
    //   url = url +  paramValues[0] +arguments[0]+ paramValues[1] + arguments[1]+ paramValues[2] + arguments[2];
    // }

    console.log(url);
    return this.http.get<any>(url);
  }
}
