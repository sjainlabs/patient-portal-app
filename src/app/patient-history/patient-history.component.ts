import {Component, OnInit} from '@angular/core';
import {SearchDataServiceService} from '../service/search-data-service.service';
import {PatientData} from '../model/PatientData';
import {PatientVisitSearchService} from "../service/patient-visit-search.service";
import {VisitData} from "../model/VisitData";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientHelper} from "../helper/PatientHelper";
import {VitalData} from "../model/VitalData";
import {CurrentMedicalData} from "../model/CurrentMedicalData";
import {VitalService} from "../service/vital.service";
import {CurrentMedicalService} from "../service/current-medical.service";

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {
  searchData1;
  patientVisitData: VisitData[]=[];
  patientVitalData: VitalData[]=[];
  currentMedicalData: CurrentMedicalData[]=[];
  patientId: number;
  error;
  vitalError;
  ERRORMESSAGE= 'System is Temporary unavailable, Please Try Again!';
  DATANOTFOUND= 'No Dr. Consult Found for the Patient!';
  newVisitFlag: boolean ;
  visitFormData :  FormGroup;
  patientHelper: PatientHelper;
  isVitalsCollapsed = true;
  isNurseNotesCollapsed = true;
  isVitalsReadOnly: boolean;
  isNurseNotesReadOnly: boolean;
  vitalsFormData: FormGroup;
  nurseNotesFormData: FormGroup;
  isCollapsed: boolean= false;
  isCollapsed1: boolean= false;

  constructor(private searchDataService: SearchDataServiceService,
              private patientVisitSearchService: PatientVisitSearchService,
              private vitalService: VitalService,
              private currentMedicalService: CurrentMedicalService,
              private fb: FormBuilder) {
    this.patientId=1;
    this.createForm();
    this.createFormVitals();
    this.createFormNurseNotes();
    this.patientHelper = new PatientHelper();
    this.isVitalsReadOnly = true;
    this.isNurseNotesReadOnly = true;
    const searchData1 = this.getPatientDataFromSearch();
    this.patientId = Number(searchData1.id) ;

  }

  ngAfterContentInit(){
    this.getPatientVisit();
    this.getPatientVital();
    this.getPatientCurrentMedical()
    console.log("called getPatientMedicalVital")
  }

  ngOnInit() {

  }

  createFormVitals() {
    this.vitalsFormData = this.fb.group({
      bloodPressure: new FormControl(''),
      temperature: new FormControl(''),
      weight: new FormControl(''),
      bmi: new FormControl(''),
      height: new FormControl(''),
      O2Saturation: new FormControl(''),
      pulse: new FormControl(''),


    });
  }

  createFormNurseNotes() {
    this.nurseNotesFormData = this.fb.group({
      allergies: new FormControl(''),
      referredFrom: new FormControl(''),
      currentMedication: new FormControl(''),
      currentConcern: new FormControl(''),
      reasonForVisit: new FormControl(''),
      additionalNurseNotes: new FormControl('')

    });
  }


  createForm() {
    this.visitFormData = this.fb.group({
      symptoms: new FormControl('',Validators.required),
      prescription: new FormControl('',Validators.required),

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
    this.showLoader();

    const patientId = this.patientId ;
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

  getPatientVital() {
    this.showLoader();
    console.log("in getPatientMedicalVital" );
    const patientId = Number(this.patientId) ;
    this.patientVitalData=[];
    this.vitalError='';
    this.vitalService.searchVitalForPatientId(patientId)
      .subscribe(dataVital => {
          console.log(dataVital);
          if(dataVital == null) {
            this.vitalError = this.DATANOTFOUND;
          }
          else{
            for (let i = 0; i < dataVital.length; i++) {
              this.patientVitalData.push(dataVital[i]);
            }
          }
          this.hideLoader();
        }
        // }
        ,
        error1 => {
          this.vitalError = this.ERRORMESSAGE;
          this.hideLoader();
        }
      );
    ;

  }

  getPatientCurrentMedical() {
    this.showLoader();
    console.log("in getPatientCurrentMedical" );
    const patientId = Number(this.patientId) ;
    this.currentMedicalData=[];
    this.vitalError='';
    this.currentMedicalService.searchCurrentMedicalForPatientId(patientId)
      .subscribe(dataCurrentMedical => {
          console.log(dataCurrentMedical);
          if(dataCurrentMedical == null) {
            this.vitalError = this.DATANOTFOUND;
          }
          else{
            for (let i = 0; i < dataCurrentMedical.length; i++) {
              this.currentMedicalData.push(dataCurrentMedical[i]);
            }
          }
          this.hideLoader();
        }
        // }
        ,
        error1 => {
          this.vitalError = this.ERRORMESSAGE;
          this.hideLoader();
        }
      );
    ;

  }

  editVitals() {
    this.isVitalsReadOnly = false;
  }

  editNurseNotes() {
    this.isNurseNotesReadOnly = false;
  }

  onSubmitVitals() {
    this.showLoader();
    console.log(this.vitalsFormData.value);
    this.isVitalsReadOnly=true;
    this.isVitalsCollapsed=true;
    this.addVital(this.vitalsFormData.value);

  }

  onSubmitNurseNotes() {
    this.showLoader();
    console.log(this.nurseNotesFormData.value);
    this.isNurseNotesReadOnly=true;
    this.isNurseNotesCollapsed=true;
   this.addCurrentMedical(this.nurseNotesFormData.value);

  }

  addVital(dataValue){
    const patient  = new PatientData() ;
    patient.id = this.patientId.toString()
    this.vitalService.addVitalForPatient(dataValue, patient)
      .subscribe( s => {
          console.log(s);
          this.hideLoader();

        },
        error1 => {
          this.error = this.ERRORMESSAGE;
          this.hideLoader();
        }
      );
    this.hideLoader();
  }

  addCurrentMedical(dataValue){
    const patient  = new PatientData() ;
    patient.id = this.patientId.toString()
    this.currentMedicalService.addCurrentMedicalForPatient(dataValue, patient)
      .subscribe( s => {
          console.log(s);
          this.hideLoader();

        },
        error1 => {
          this.error = this.ERRORMESSAGE;
          this.hideLoader();
        }
      );
    this.hideLoader();
  }
}
