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
    this.totalDatesOfBirth = this.patientHelper.createDatesOfBirth();
    this.totalMonthOfBirth = this.patientHelper.createMonthOfBirth();
    this.totalDatesOfYear = this.patientHelper.creatYearOfBirthArray();
  }



  onSubmit() {
    this.showLoader();
    this.show=true;

    const dateOfBirth = this.patientFormData.getRawValue().birthYear+'-'+this.patientFormData.getRawValue().birthMonth+'-'+this.patientFormData.getRawValue().birthDate;
    this.patientFormData.patchValue({
      dateOfBirth: dateOfBirth
    });
    this.updatePersonalIdValue();
    // TODO: Use EventEmitter with form value
    console.log(this.patientFormData.value);
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


  hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

  updatePersonalIdValue() {
    if(this.patientFormData.getRawValue().personalIdType === ''){
      this.patientFormData.patchValue({
        personalId: ''
      });
    }
  }
}
