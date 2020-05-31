import {Component, OnInit} from '@angular/core';
import {PatientData} from '../model/PatientData';
import {SearchDataServiceService} from '../service/search-data-service.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  patientData: PatientData;
  // searchDataService: SearchDataServiceService;

  constructor( private router: Router,
               private searchDataService: SearchDataServiceService,
               private searchService: SearchService) {
    this.patientData = new PatientData();
    // this.searchDataService = new SearchDataServiceService();
  }

  ngOnInit() {
  }

  populateSearchData(): PatientData {
    this.patientData.firstName = 'Test Patient First Name';
    this.patientData.lastName = 'Test Patient last Name';
    return this.patientData;
  }

  searchPatientData() {
    this.searchService.searchPatient(1)
      .subscribe(data => {
        console.log(data);
        this.patientData = data;
        // this.patientData.firstName = data.firstName;
        // this.patientData.lastName = data.lastName;
        // const patientData2 = this.populateSearchData();
        this.searchDataService.setSearchData( this.patientData);
        this.router.navigate(['print']);
      });
  }

}
