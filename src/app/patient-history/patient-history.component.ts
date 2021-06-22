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
  DATANOTFOUND= 'No Visits Found for the Patient!';
  title = 'Patient Portal';

  constructor(private searchDataService: SearchDataServiceService,
              private patientVisitSearchService: PatientVisitSearchService) {
    this.patientId=1;
  }

  ngOnInit() {
    this.getPatientVisit();
  }

  getPatientDataFromSearch() {
   return this.searchDataService.getSearchData();
    // this.firstName = searchData.firstName;
    // this.lastName = searchData.lastName;
    // this.age = searchData.age;
    // this.searchDataService.getSearchData();
    // console.log(this.patientData1);
  }

  getPatientVisit() {
   const searchData1 = this.getPatientDataFromSearch();
    const patientId = Number(searchData1.id) ;
    this.patientVisitData=[];
    this.error='';
    this.patientVisitSearchService.searchVisitForPatientId(patientId)
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


  addVisit() {

  }
}
