import { Component, OnInit } from '@angular/core';
import {SearchDataServiceService} from '../service/search-data-service.service';
import {PatientData} from '../model/PatientData';
import {PatientVisitSearchService} from "../service/patient-visit-search.service";
import {stringDistance} from "codelyzer/util/utils";
import {VisitData} from "../model/VisitData";

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  searchData1;
  patientVisitData: VisitData[];
  patientId: number;
  error;
  ERRORMESSAGE= 'System is Temporary unavailable, Please Try Again!';
  DATANOTFOUND= 'Data Not Found!';
  title = 'Patient Portal';

  constructor(private patientVisitSearchService: PatientVisitSearchService) {
    this.patientId=1;
  }

  ngOnInit() {
    this.getPatientVisit();
  }

  getPatientVisit() {
    this.patientVisitData=[];
    this.error='';
    const searchData = this.patientVisitSearchService.searchVisitForPatientId(1)
      .subscribe(data => {
        console.log(data);
        if(data == null) {
          this.error = this.DATANOTFOUND;
        }
        else{
          for (let i = 0; i < data.length; i++) {
            this.patientVisitData.push(data[i]);
          }
        }
        this.hideLoader();
      }
      // }
      ,
      error1 => {
        this.error = this.ERRORMESSAGE;
        this.hideLoader();
      }
    );
    ;

  }

  hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }


}
