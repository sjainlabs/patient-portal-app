import { Component, OnInit } from '@angular/core';
import {AppointmentDataServiceService} from "../service/appointment-data-service.service";
import {AppointmentData} from "../model/AppointmentData";
import {AppointmentCreateComponent} from "../appointment-create/appointment-create.component";

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrls: ['./appointment-confirmation.component.css']
})
export class AppointmentConfirmationComponent implements OnInit {

  appointmentConfirmation : AppointmentData;

  constructor(private appointmentConfirmationService: AppointmentDataServiceService) {
    this.appointmentConfirmation = new AppointmentData();
  }

  ngOnInit() {
    this.showLoader();
    this.appointmentConfirmation = this.appointmentConfirmationService.appointmentConfirmation;
    this.hideLoader();
  }

  hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

}
