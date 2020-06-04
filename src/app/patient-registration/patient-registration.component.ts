import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientRegistrationService} from "../service/patient-registration.service";

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent  {

  patientAdded: boolean = false;
  patientIdCreated: string
  title = 'Patient Portal';
  patientFormData = new FormGroup({
    firstName: new FormControl( '',Validators.required),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    contact: new FormControl(''),
    emergencyContact: new FormControl(''),
    careOf: new FormControl(''),
    email: new FormControl(''),
    weight: new FormControl(''),
    height: new FormControl(''),
    symptoms: new FormControl(''),
    prescription: new FormControl(''),
    additonalNotes: new FormControl(''),
  });


  constructor(private patientRegistrationService: PatientRegistrationService) {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.patientFormData.value);
    this.patientRegistrationService.addPatient(this.patientFormData.value)
      .subscribe(s => {console.log(s);
        this.patientIdCreated = s;
        this.patientAdded = true });
  }


}
