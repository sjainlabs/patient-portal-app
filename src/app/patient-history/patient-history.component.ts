import { Component, OnInit } from '@angular/core';
import {SearchDataServiceService} from '../service/search-data-service.service';
import {PatientData} from '../model/PatientData';
import {PatientVisitSearchService} from "../service/patient-visit-search.service";
import {stringDistance} from "codelyzer/util/utils";
import {VisitData} from "../model/VisitData";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {p} from "@angular/core/src/render3";

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
  newVisitFlag: boolean ;
  visitFormData :  FormGroup;

  constructor(private searchDataService: SearchDataServiceService,
              private patientVisitSearchService: PatientVisitSearchService,
              private fb: FormBuilder) {
    this.patientId=1;
    this.createForm();
  }

  ngOnInit() {
    this.getPatientVisit();
  }

  createForm() {
    this.visitFormData = this.fb.group({
      symptoms: new FormControl(''),
      prescription: new FormControl(''),
      age: new FormControl(''),
      followUpDays: new FormControl(''),
      notes: new FormControl('')

    });
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
    this.patientId = Number(searchData1.id) ;
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
    this.newVisitFlag = true;
    this.error='';
    console.log(this.visitFormData.value);
  }

  onSubmitVisit(){
    this.showLoader();
    console.log(this.visitFormData.value);
    const patient  = new PatientData() ;
    patient.id = this.patientId.toString()

    this.patientVisitSearchService.addVisitForPatient(this.visitFormData.value, patient)
      .subscribe( s => {
        console.log(s);
        this.hideLoader();
        this.newVisitFlag = false;
        this.getPatientVisit();
      },
      error1 => {
        this.error = this.ERRORMESSAGE;
        this.hideLoader();
      }
      );
  }
}
