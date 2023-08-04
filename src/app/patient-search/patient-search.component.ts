import {Component, OnInit} from '@angular/core';
import {PatientData} from '../model/PatientData';
import {SearchDataServiceService} from '../service/search-data-service.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SearchService} from '../service/search.service';
import {PatientHelper} from "../helper/PatientHelper";

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  data: PatientData[];
  patientId: number;
  firstName: string;
  lastName: string;
  contact: number;
  personalId: string;
  birthDate: string;
  birthMonth: string;
  birthYear: string;
  processing: boolean;
  multiple: boolean;
  error;
  ERRORMESSAGE= 'System is Temporary unavailable, Please Try Again!';
  DATANOTFOUND= 'Data Not Found - One or the other Search Criteria entered is not correct!';
  Mandatory = "One of the below field is mandatory";
  totalDatesOfBirth=[];
  totalMonthOfBirth=[];
  totalDatesOfYear=[];
  patientHelper: PatientHelper;

  // searchDataService: SearchDataServiceService;

  constructor( private router: Router,
               private searchDataService: SearchDataServiceService,
               private searchService: SearchService) {

    this.processing= false;
    this.multiple= false;
    this.patientHelper = new PatientHelper();
    // this.searchDataService = new SearchDataServiceService();
  }

  ngOnInit() {
    this.hideLoader();
    this.totalDatesOfBirth = this.patientHelper.createDatesOfBirth();
    this.totalMonthOfBirth = this.patientHelper.createMonthOfBirth();
    this.totalDatesOfYear = this.patientHelper.creatYearOfBirthArray();
  }

  // populateSearchData(): AppointmentData {
  //   this.data.firstName = 'Test Patient First Name';
  //   this.data.lastName = 'Test Patient last Name';
  //   return this.data;
  // }

  searchPatientData() {
    this.data = [];
    this.error= '';
    if( (this.patientId === null || this.patientId === undefined || this.patientId.toString().trim().length === 0) &&
      (this.firstName === null || this.firstName === undefined || this.firstName.trim().length === 0) &&
      (this.lastName === null || this.lastName === undefined || this.lastName.trim().length === 0) &&
      (this.contact === null || this.contact === undefined || this.contact === 0) &&
      (this.personalId === null || this.personalId === undefined || this.personalId.trim().length === 0) &&
      (this.birthDate === null || this.birthDate === undefined || this.birthDate.trim().length === 0 ||
      this.birthMonth === null || this.birthMonth === undefined || this.birthMonth.trim().length === 0 ||
      this.birthYear === null || this.birthYear === undefined || this.birthYear.trim().length === 0)
    ){
      this.error = this.Mandatory;
    }
  else {
      this.showLoader();
      this.processing = true;
      this.multiple = false;
      let dateOfBirth;

      if(!(this.birthDate === null || this.birthDate === undefined || this.birthDate.trim().length === 0 ||
        this.birthMonth === null || this.birthMonth === undefined || this.birthMonth.trim().length === 0 ||
        this.birthYear === null || this.birthYear === undefined || this.birthYear.trim().length === 0)) {
       dateOfBirth = this.birthYear+'-'+this.birthMonth+'-'+this.birthDate;
      }

      this.searchService.searchPatient(this.patientId, this.firstName, this.lastName,
        this.contact, this.personalId, dateOfBirth)
        .subscribe(data => {
            console.log(data);
            if(data === null || data.length === 0) {
              this.error = this.DATANOTFOUND;
            }
            else{
              for (let i = 0; i < data.length; i++) {
                this.data.push(data[i]);
              }
              this.multiple = true;
            }
            this.processing= false;
            this.hideLoader();
            }
          // }
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

  printPage(data) {
    this.searchDataService.setSearchData(data);
    this.hideLoader();
    this.router.navigate(['print']);
  }

  viewHistory(data) {
    this.searchDataService.setSearchData(data);
    this.router.navigate(['history']);
  }

  createAppointment(data) {
    this.searchDataService.setSearchData(data);
    this.router.navigate(['appointment-create']);
  }

}
