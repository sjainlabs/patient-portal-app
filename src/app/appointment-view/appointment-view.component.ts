import {Component, OnInit} from '@angular/core';
import {AppointmentSearchService} from "../service/appointment-search.service";
import {AppointmentData} from "../model/AppointmentData";
import {DoctorData} from "../model/DoctorData";


@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit {

  error;
  ERRORMESSAGE = 'System is Temporary unavailable, Please Try Again!';
  DATANOTFOUND = 'No Appointments Found for the Patient!';
  appointmentData: AppointmentData[] = [];
  appointment: AppointmentData;
  doctor: DoctorData;

  constructor(private appointmentSearchService: AppointmentSearchService) {
    this.appointment = new AppointmentData();
    this.doctor = new DoctorData();


  }

  ngOnInit() {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.showLoader();
    this.appointmentData = [];
    this.appointmentSearchService.getAllAppointments()
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


}
