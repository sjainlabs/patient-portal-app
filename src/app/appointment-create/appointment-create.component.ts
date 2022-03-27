import {Component, OnInit} from '@angular/core';
import {AppointmentData} from "../model/AppointmentData";
import {DoctorData} from "../model/DoctorData";
import {AppointmentSearchService} from "../service/appointment-search.service";
import * as moment from 'moment';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  doctorName: string;
  appointmentDate: string;
  appointmentFound: boolean = false;
  error;
  ERRORMESSAGE = 'System is Temporary unavailable, Please Try Again!';
  DATANOTFOUND = 'No Appointments Found for the Patient!';
  appointmentData: AppointmentData[] = [];
  locale = 'en'; // or whatever you want...
  hoursSlot1 = [];
  hoursSlot2 = [];
  hoursSlot3 = [];

  constructor(private appointmentSearchService: AppointmentSearchService) {
  }

  ngOnInit() {
    this.appointmentWindow1();
    this.appointmentWindow2();
    this.appointmentWindow3();
  }


  appointmentWindow1() {
    moment.locale(this.locale);  // optional - can remove if you are only dealing with one locale

    for (let hour = 8;hour < 21; hour++ )
    {
      this.hoursSlot1.push(moment({hour}).format('h:mm A'));
      this.hoursSlot1.push(
        moment({
          hour,
          minute: 20
        }).format('h:mm A')
      );
    }

  }
  appointmentWindow2() {
    moment.locale(this.locale);  // optional - can remove if you are only dealing with one locale

    for (let hour = 12;hour < 17; hour++ )
    {
      this.hoursSlot2.push(moment({hour}).format('h:mm A'));
      this.hoursSlot2.push(
        moment({
          hour,
          minute: 20
        }).format('h:mm A')
      );
    }

  }
  appointmentWindow3() {
    moment.locale(this.locale);  // optional - can remove if you are only dealing with one locale

    for (let hour = 16;hour < 21; hour++ )
    {
      this.hoursSlot3.push(moment({hour}).format('h:mm A'));
      this.hoursSlot3.push(
        moment({
          hour,
          minute: 20
        }).format('h:mm A')
      );
    }

  }

  searchAppointment(doctorName, appointmentDate) {
    this.showLoader();
    this.appointmentData = [];
    this.appointmentSearchService.getAllAppointments(doctorName, appointmentDate)
      .subscribe(data => {
          console.log(data);
          if (data == null) {
            this.error = this.DATANOTFOUND;
          } else {
            for (let i = 0; i < data.length; i++) {

              this.appointmentData.push(data[i]);
              console.log(this.appointmentData[i].appointmentDate);
              console.log(this.appointmentData[i].startTime);

            }
            if (data.length > 0) {
              this.appointmentFound = true;
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
      )
  }

  hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

  bookAppointment(date) {
    console.log("Appointment Booked : " + date);
  }
}
