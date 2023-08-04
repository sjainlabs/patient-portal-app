import { Injectable } from '@angular/core';
import {AppointmentData} from "../model/AppointmentData";

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataServiceService {


  private _appointmentConfirmation: AppointmentData;

  constructor() {
    this._appointmentConfirmation = new AppointmentData();
  }

  get appointmentConfirmation(): AppointmentData {
    return this._appointmentConfirmation;
  }

  set appointmentConfirmation(value: AppointmentData) {
    this._appointmentConfirmation = value;
  }


}
