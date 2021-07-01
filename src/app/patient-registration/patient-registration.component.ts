import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientRegistrationService} from "../service/patient-registration.service";
import {PatientHelper} from "../helper/PatientHelper";

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent  {

  show: boolean = false;
  processing: boolean = false;
  patientIdCreated: string;
  patientFormData :  FormGroup;
  error='';
  ERRORMESSAGE= 'System is Temporary unavailable, Please Try Again!';
  totalDatesOfBirth=[];
  totalMonthOfBirth=[];
  totalDatesOfYear=[];
  patientHelper: PatientHelper;

  constructor(private patientRegistrationService: PatientRegistrationService,
              private fb: FormBuilder,

             ) {
    this.patientHelper = new PatientHelper();
    this.show = false;
    this.processing= false;
    this.createForm();
  }

  ngOnInit() {
    this.hideLoader();
    this.createDatesOfBirth();
    this.createMonthOfBirth();
    this.creatYearOfBirthArray();
  }

  createDatesOfBirth(){
    this.totalDatesOfBirth[0]=''
    let index: number = 1;
    let i: number;
    for (i = 1; i <= 31 ; i++) {
      this.totalDatesOfBirth[index] = i;
      index++;
    }
    // this.totalDatesOfBirth = Array.from({length: 31}, (_, i) => i + 2);

  }

  createMonthOfBirth(){
    this.totalMonthOfBirth[0]='';
    let index: number = 1;
    let i: number;
    for (i = 1; i <= 12 ; i++) {
      this.totalMonthOfBirth[index] = i;
      index++;
    }
    // this.totalMonthOfBirth = Array.from({length: 12}, (_, i) => i + 2);


  }

  creatYearOfBirthArray() {
    const currentYear = new Date().getFullYear();
    this.totalDatesOfYear[0]='';
    let index: number = 1;
    let i: number;
    // i=  currentYear;
    for (i = currentYear; i > currentYear - 120; i--) {
      this.totalDatesOfYear[index] = i;
      index++;
    }
  }

  onSubmit() {
    this.showLoader();
    // TODO: Use EventEmitter with form value
    console.log(this.patientFormData.value);

    const dateOfBirth = this.patientFormData.getRawValue().birthYear+'-'+this.patientFormData.getRawValue().birthMonth+'-'+this.patientFormData.getRawValue().birthDate;
    this.patientFormData.patchValue({
      dateOfBirth: dateOfBirth
    });
    this.show=true;
    this.patientRegistrationService.addPatient(this.patientFormData.value)
      .subscribe(s => {
        console.log(s);
        this.patientIdCreated = s;
        this.error= '';
        this.processing = true;
          this.hideLoader();
      },
        error1 => {this.error = this.ERRORMESSAGE;
          this.show= false;
          this.processing=false;
          this.hideLoader();
      }
        );
        // this.show = true;
  }


  addNewPatientAgain(){
    this.show = false;
    this.processing = false;
  }


  createForm() {
    this.patientFormData = this.fb.group({

      firstName: new FormControl( '',Validators.required),
      lastName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      birthDate: new FormControl('',Validators.required),
      birthMonth: new FormControl('',Validators.required),
      birthYear: new FormControl('',Validators.required),
      age: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      contact: new FormControl(''),
      emergencyContact: new FormControl(''),
      careOf: new FormControl(''),
      email: new FormControl(''),
      personalIdType: new FormControl(''),
      personalId: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      doctorName: new FormControl(''),
      symptoms: new FormControl(''),
      prescription: new FormControl(''),
      additionalNotes: new FormControl(''),
    });

  }

  numberOnly(event): boolean {
  let patt = /^([0-9])$/;
  let result = patt.test(event.key);
  return result;
}

  hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

}
