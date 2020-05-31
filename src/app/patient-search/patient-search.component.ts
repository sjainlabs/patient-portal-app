import {Component, OnInit} from '@angular/core';
import {PatientData} from '../model/PatientData';
import {SearchDataServiceService} from '../service/search-data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  patientData: PatientData;
  // searchDataService: SearchDataServiceService;

  constructor( private router: Router,
               private searchDataService: SearchDataServiceService) {
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
    const patientData1 = this.populateSearchData();
    this.searchDataService.setSearchData( patientData1);
    this.router.navigate(['print']);
  }

}
