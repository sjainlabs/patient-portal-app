import {DoctorData} from "./DoctorData";
import {PatientData} from "./PatientData";
import ZonedDateTime from "zoned-date-time";
// import {zoneData} from "iana-tz-data";

export class AppointmentData {
  appointmentDate: String;
  startTime: String;
  endTime: String;
  patient : PatientData;
  doctor : DoctorData;


}
