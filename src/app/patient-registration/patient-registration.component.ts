import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientRegistrationService} from "../service/patient-registration.service";

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent  {

  show: boolean = false;
  patientIdCreated: string;
  title = 'Patient Portal';
  patientFormData :  FormGroup;
  error='';
  ERRORMESSAGE= 'System is Temp unavailable'



  constructor(private patientRegistrationService: PatientRegistrationService, private fb: FormBuilder) {
    this.show = false;
    this.createForm();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.patientFormData.value);
    this.patientRegistrationService.addPatient(this.patientFormData.value)
      .subscribe(s => {console.log(s);
        this.patientIdCreated = s;
        this.show= true
        this.error= '';
      },
        error1 => {this.error = this.ERRORMESSAGE
          this.show= false
      }
        );
        // this.show = true;
  }


  addNewPatientAgain(){
    this.show = false;
  }


  createForm() {
    this.patientFormData = this.fb.group({

      firstName: new FormControl( '',Validators.required),
      lastName: new FormControl(''),
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

}
