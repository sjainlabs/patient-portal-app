import {Component, OnInit} from '@angular/core';
import {AppointmentData} from "../model/AppointmentData";
import {DoctorData} from "../model/DoctorData";
import {AppointmentSearchService} from "../service/appointment-search.service";
import * as moment from 'moment';
import {PatientData} from "../model/PatientData";
import {AppointmentConfirmationComponent} from "../appointment-confirmation/appointment-confirmation.component";
import {AppointmentDataServiceService} from "../service/appointment-data-service.service";
import {Router} from "@angular/router";
import {DoctorServiceService} from "../service/doctor-service.service";
import {SearchDataServiceService} from "../service/search-data-service.service";

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  doctorName: string;
  appointmentDate: string;
  appointmentFound: boolean = false;
  appointmentSearched: boolean = false;
  error;
  ERRORMESSAGE = 'System is Temporary unavailable, Please Try Again!';
  DATANOTFOUND = 'No Appointments Found for the Patient!';
  appointmentData: AppointmentData[] = [];
  locale = 'en'; // or whatever you want...
  hoursSlot1 = [];
  currentDate;
  doctorList : DoctorData[] =[];
  doctorSelected : DoctorData ;

  constructor(private appointmentSearchService: AppointmentSearchService,
              private appointmentConfirmationService: AppointmentDataServiceService,
              private doctorService: DoctorServiceService,
              private searchDataService: SearchDataServiceService,
              private router: Router) {
    this.currentDate = moment(new Date()).format("YYYY-MM-DD");

  }

  ngOnInit() {
    this.hideLoader();
    this.searchDoctors();
    this.appointmentWindow1();
  }


  appointmentWindow1() {
    this.hoursSlot1 = [];
    moment.locale(this.locale);  // optional - can remove if you are only dealing with one locale

    for (let hour = 8;hour < 21; hour++ )
    {
      this.hoursSlot1.push(moment({hour}).format('HH:mm A'));
      this.hoursSlot1.push(
        moment({
          hour,
          minute: 20
        }).format('HH:mm A')
      );
    }

  }

  searchDoctors() {
    this.showLoader();
    this.doctorList = [];
    this.doctorService.searchAllDoctors()
      .subscribe(data => {
          console.log(data);
          if (data == null) {
            this.error = this.DATANOTFOUND;
          } else {
            for (let i = 0; i < data.length; i++) {

              this.doctorList.push(data[i]);
              console.log(this.doctorList[i].doctorName);
              // console.log(this.appointmentData[i].startTime);

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


  searchAppointment(doctorName, appointmentDate,hourslot) {
    this.appointmentWindow1();
    this.showLoader();
    this.appointmentData = [];
    this.appointmentSearchService.getAllAppointments(doctorName.doctorName, appointmentDate)
      .subscribe(data => {
          console.log(data);
          this.appointmentSearched=true;
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
              const hoursSlotFiltered =  this.hoursSlot1.filter(o1 => !data.some(o2 =>  appointmentDate + " " + o1 === o2.startTime));
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

  bookAppointment(date, startTime) {
    let patient = this.getPatientDataFromSearch();
    let appointment : AppointmentData = new AppointmentData();
    appointment.doctor = new DoctorData();
    appointment.patient = new PatientData();
    appointment.appointmentDate = date;
    appointment.startTime= appointment.appointmentDate +" "+ startTime;
    appointment.doctor.doctorId = this.doctorSelected.doctorId;
    appointment.doctor.doctorName = this.doctorSelected.doctorName;
    appointment.patient.id = patient.id;
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

  getPatientDataFromSearch() {
    return this.searchDataService.getSearchData();
  }

  appointmentConfirmation(data) {
    this.appointmentConfirmationService.appointmentConfirmation = data;
    this.router.navigate(['appointment-confirmation']);
  }


  hideLoader() {

    document.getElementById('loadin').style.display = 'none';
  }

  showLoader() {

    document.getElementById('loadin').style.display = '';
  }

}
