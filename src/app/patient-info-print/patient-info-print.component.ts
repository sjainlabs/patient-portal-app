import { Component, OnInit } from '@angular/core';
import {SearchDataServiceService} from '../service/search-data-service.service';
import {PatientData} from '../model/PatientData';

@Component({
  selector: 'app-patient-info-print',
  templateUrl: './patient-info-print.component.html',
  styleUrls: ['./patient-info-print.component.css']
})
export class PatientInfoPrintComponent implements OnInit {
  searchData1;
  firstName ;
  lastName;
  age;

  patientData1: PatientData;

  constructor(private searchDataService: SearchDataServiceService) {
    // this.searchDataService = new SearchDataServiceService();
    this.patientData1 = new PatientData();

  }

  ngOnInit() {
    // this.firstName = this.patientData1.firstName;
    this.getSearch();
  }

  getSearch() {
    // const searchData = this.searchDataService.getSearchData();
   const patient_search_state =JSON.parse(localStorage.getItem('patient-search-state'));
    this.searchData1 = patient_search_state;
    localStorage.setItem('patient-search-state', '');

    // this.firstName = searchData.firstName;
    // this.lastName = searchData.lastName;
    // this.age = searchData.age;
     // this.searchDataService.getSearchData();
    // console.log(this.patientData1);
  }

}
