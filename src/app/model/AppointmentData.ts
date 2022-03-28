import {DoctorData} from "./DoctorData";
import {PatientData} from "./PatientData";

export class AppointmentData {
  appointmentDate: String;
  startTime: String;
  endTime: String;
  patient : PatientData;
  doctor : DoctorData;


}
