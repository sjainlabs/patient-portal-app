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

  patientData: PatientData[];
  patientId: number;
  firstName: string;
  lastName: string;
  title = 'Patient Portal';
  processing: boolean;
  multiple: boolean;
  error='';
  ERRORMESSAGE= 'System is Temporary unavailable, Please Try Again!';
  Mandatory = "One of the below field is mandatory";

  // searchDataService: SearchDataServiceService;

  constructor( private router: Router,
               private searchDataService: SearchDataServiceService,
               private searchService: SearchService) {
    this.patientData = [];
    this.processing= false;
    this.multiple= false;
    // this.searchDataService = new SearchDataServiceService();
  }

  ngOnInit() {
    this.hideLoader()
  }

  // populateSearchData(): PatientData {
  //   this.patientData.firstName = 'Test Patient First Name';
  //   this.patientData.lastName = 'Test Patient last Name';
  //   return this.patientData;
  // }

  searchPatientData() {
    if( (this.patientId === null || this.patientId === undefined || this.patientId.toString().trim().length === 0) &&
      (this.firstName === null || this.firstName === undefined || this.firstName.trim().length === 0) &&
      (this.lastName === null || this.lastName === undefined || this.lastName.trim().length === 0)){
      this.error = this.Mandatory;
    }
  else {
      this.showLoader();
      this.processing = true;
      this.searchService.searchPatient(this.patientId, this.firstName, this.lastName)
        .subscribe(data => {
            console.log(data);
            if (data.length == 1) {
              this.patientData[0] = data[0];


              // this.patientData.firstName = data.firstName;
              // this.patientData.lastName = data.lastName;
              // const patientData2 = this.populateSearchData();
              this.searchDataService.setSearchData(this.patientData[0]);

              this.hideLoader();
              // window.location.href = '/print';
              this.router.navigate(['print']);
            }
            else{
              console.log("multiple rows")
              for(let i=0; i < data.length;i++) {
                this.patientData.push(data[i]);
              }
              this.hideLoader();
              this.multiple = true;
            }
          }
          ,
          error1 => {
            this.error = this.ERRORMESSAGE;
            this.processing = false;
            this.hideLoader();
          }
        );
    }
  }

   hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

}
