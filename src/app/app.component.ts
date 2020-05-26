import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patient Portal';
  patientFormData = new FormGroup({
    firstName: new FormControl(''),
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



  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.patientFormData.value);
  }



}
