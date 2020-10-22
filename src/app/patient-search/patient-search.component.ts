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
  patientId: number;
  title = 'Patient Portal';
  processing:boolean;
  error='';
  ERRORMESSAGE= 'System is Temporary unavailable, Please Try Again!';
  // searchDataService: SearchDataServiceService;

  constructor( private router: Router,
               private searchDataService: SearchDataServiceService,
               private searchService: SearchService) {
    this.patientData = new PatientData();
    this.processing= false;
    // this.searchDataService = new SearchDataServiceService();
  }

  ngOnInit() {
    this.hideLoader()
  }

  populateSearchData(): PatientData {
    this.patientData.firstName = 'Test Patient First Name';
    this.patientData.lastName = 'Test Patient last Name';
    return this.patientData;
  }

  searchPatientData() {
    this.showLoader();
    this.processing = true;
    this.searchService.searchPatient(this.patientId)
      .subscribe(data => {
        console.log(data);
        this.patientData = data;


        // this.patientData.firstName = data.firstName;
        // this.patientData.lastName = data.lastName;
        // const patientData2 = this.populateSearchData();
        this.searchDataService.setSearchData( this.patientData);
        this.hideLoader();
        // window.location.href = '/print';
        this.router.navigate(['print']);
      }
        ,
        error1 => {
        this.error = this.ERRORMESSAGE;
          this.processing=false;
          this.hideLoader();
        }
        );
  }

   hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

}
