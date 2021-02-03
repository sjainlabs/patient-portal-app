import { Component, OnInit } from '@angular/core';
import {SearchDataServiceService} from '../service/search-data-service.service';
import {PatientData} from '../model/PatientData';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  searchData1;
  firstName ;
  lastName;
  age;
  patientData1: PatientData;

  constructor(private searchDataService: SearchDataServiceService) {
    this.patientData1 = new PatientData();
  }

  ngOnInit() {
    this.getSearch();
  }

  getSearch() {
    const searchData = this.searchDataService.getSearchData();
    this.searchData1 = searchData;
    this.firstName = searchData.firstName;
    this.lastName = searchData.lastName;
    this.age = searchData.age;
    this.searchDataService.getSearchData();
    console.log('In History' + this.patientData1);
  }

}
