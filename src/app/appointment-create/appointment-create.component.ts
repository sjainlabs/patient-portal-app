import {Component, OnInit} from '@angular/core';
import {AppointmentData} from "../model/AppointmentData";
import {DoctorData} from "../model/DoctorData";
import {AppointmentSearchService} from "../service/appointment-search.service";
import * as moment from 'moment';
import {PatientData} from "../model/PatientData";
import {AppointmentConfirmationComponent} from "../appointment-confirmation/appointment-confirmation.component";
import {AppointmentDataServiceService} from "../service/appointment-data-service.service";
import {Router} from "@angular/router";

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
  currentDate;

  constructor(private appointmentSearchService: AppointmentSearchService,
              private appointmentConfirmationService: AppointmentDataServiceService,
              private router: Router) {
    this.currentDate = moment(new Date()).format("YYYY-MM-DD");

  }

  ngOnInit() {
    this.hideLoader();
    this.appointmentWindow1();
    this.appointmentWindow2();
    this.appointmentWindow3();
  }


  appointmentWindow1() {
    this.hoursSlot1 = [];
    moment.locale(this.locale);  // optional - can remove if you are only dealing with one locale

    for (let hour = 8;hour < 21; hour++ )
    {
      this.hoursSlot1.push(moment({hour}).format('hh:mm A'));
      this.hoursSlot1.push(
        moment({
          hour,
          minute: 20
        }).format('hh:mm A')
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

  searchAppointment(doctorName, appointmentDate,hourslot) {
    this.appointmentWindow1();
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
              // console.log(this.appointmentData[i].startTime);

            }
            if (data.length > 0) {
              // let startTime = this.appointmentData[i].startTime.slice(11);
              let hoursSlotFiltered =  hourslot.filter(o1 => !data.some(o2 =>  appointmentDate + " " + o1 === o2.startTime));
              console.log("hoursSlotFiltered" + hoursSlotFiltered);
              this.hoursSlot1 = hoursSlotFiltered;
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

  bookAppointment(date, startTime) {
    let appointment : AppointmentData = new AppointmentData();
    appointment.doctor = new DoctorData();
    appointment.patient = new PatientData();
    appointment.appointmentDate = date;
    appointment.startTime= appointment.appointmentDate +" "+ startTime;
    appointment.doctor.doctorId = 2;
    appointment.doctor.doctorName = this.doctorName;
    appointment.patient.id = '2';
    this.appointmentSearchService.createAppointment(appointment)
      .subscribe(s => {
          console.log("Appointment Booked id"+ s);
          // this.patientIdCreated = s;
          this.error= '';
          // this.processing = true;
          this.hideLoader();
        },
        error1 => {this.error = this.ERRORMESSAGE;
          // this.show= false;
          // this.processing=false;
          this.hideLoader();
        }
      );
    console.log("Appointment Booked : " + date);
    this.appointmentConfirmation(appointment);


  }

  appointmentConfirmation(data) {
    this.appointmentConfirmationService.appointmentConfirmation = data;
    this.router.navigate(['appointment-confirmation']);
  }

}
