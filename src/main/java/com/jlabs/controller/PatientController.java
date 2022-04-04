package com.jlabs.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jlabs.model.Doctor;
import com.jlabs.model.Patient;
import com.jlabs.model.Appointment;
import com.jlabs.model.Visit;
import com.jlabs.persistence.entity.VisitEntity;
import com.jlabs.service.AppointmentService;
import com.jlabs.service.DoctorService;
import com.jlabs.service.PatientService;
import com.jlabs.service.VisitService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Created by sjain on 5/25/20.
 */

@RestController
@RequestMapping("/patient/v1")
@Slf4j
public class PatientController {

  @Autowired
  PatientService patientService;

  @Autowired
  VisitService visitService;

  @Autowired
  AppointmentService appointmentService;

  @Autowired
  DoctorService doctorService;

  @PostMapping
  @ResponseBody
  public ResponseEntity<String> savePatient(@RequestBody Patient patient) {
    log.info("patient request");
    log.debug("patient request {}", patient);
    final String patientResponse = patientService.savePatient(patient);
    return new ResponseEntity<>(patientResponse, HttpStatus.CREATED);

  }

//    @GetMapping
//    @ResponseBody
//    public ResponseEntity<Patient> getPatientByName(@RequestParam String name){
//
//        final Patient patientResponse = patientService.searchPatient(name);
//        return new ResponseEntity<>(patientResponse, HttpStatus.OK);
//
//    }
//
//    @GetMapping
//    @ResponseBody
//    public ResponseEntity<List<Patient>> getAllPatient(){
//        final List<Patient> patientResponse = patientService.searchAllPatient();
//        return new ResponseEntity<>(patientResponse, HttpStatus.OK);
//    }

  @GetMapping
  @ResponseBody
  public ResponseEntity<Optional> searchPatient(@RequestParam(value = "id", required = false) Integer id,
                                                @RequestParam(value = "firstName", required = false) String firstName,
                                                @RequestParam(value = "lastName", required = false) String lastName,
                                                @RequestParam(value = "contact", required = false) String contact,
                                                @RequestParam(value = "personalId", required = false) String personalId,
                                                @RequestParam(value = "dateOfBirth", required = false)@JsonFormat(shape = JsonFormat.Shape.STRING,pattern="yyyy-M-d")
                                                  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE, pattern = "yyyy-M-d") LocalDate dateOfBirth
                                                ) {
    final Optional<List<Patient>> patientResponse = patientService.searchPatient(id, firstName, lastName, contact, personalId, dateOfBirth);
    return new ResponseEntity<>(patientResponse, HttpStatus.OK);
  }

  @GetMapping("/visit")
  @ResponseBody
  public ResponseEntity<Optional> getVisitInfo(@RequestParam(value = "patientId", required = false) int patientId) {
    final Optional<List<VisitEntity>> visitEntity = visitService.getVisit(patientId);
    return new ResponseEntity<>(visitEntity, HttpStatus.OK);
  }

  @PostMapping("/visit")
  @ResponseBody
  public ResponseEntity<String> createVisitInfo(@RequestBody Visit visit) {
    log.info("patient request");
    log.debug("patient request {}", visit);
    final String visit1 = visitService.createVisit(visit);
    return new ResponseEntity<>(visit1, HttpStatus.OK);
  }

  @GetMapping("/appointments")
  @ResponseBody
  public ResponseEntity<Optional> getPatientAppointment(@Param("doctorName") String doctorName, @Param("appointmentDate") String appointmentDate ){
    Optional<List<Appointment>> patientAppointments = appointmentService.getAppointments(doctorName, appointmentDate);
    return new ResponseEntity<>(patientAppointments, HttpStatus.OK);
  }

  @PostMapping("/appointments")
  @ResponseBody
  public ResponseEntity<String> createPatientAppointment(@RequestBody Appointment appointment){
    log.debug("Create Appointment Request: {}", appointment);
    String appointmentId = appointmentService.createAppointments(appointment);
    return new ResponseEntity<>("Appointment created, AppointmentId: " + appointmentId, HttpStatus.CREATED);
  }

  @GetMapping("/appointments/{doctorId}")
  @ResponseBody
  public ResponseEntity<List<Appointment>> getAppointmentByDoctorId(@PathVariable int doctorId){
    log.info("Get Appointment by Doctor id: {}", doctorId);
    List<Appointment> appointmentsList = appointmentService.getAppointmentsByDoctorId(doctorId);
    return new ResponseEntity<>(appointmentsList, HttpStatus.OK);
  }

  @GetMapping("/doctors")
  @ResponseBody
  public ResponseEntity<Optional> getAllDoctors(){
    log.info("Get all Doctors");
    Optional<List<Doctor>> doctorList = doctorService.getAllDoctors();
    return new ResponseEntity<>(doctorList, HttpStatus.OK);
  }
}
