package com.jlabs.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jlabs.model.*;
import com.jlabs.persistence.entity.CurrentMedicalEntity;
import com.jlabs.persistence.entity.VisitEntity;
import com.jlabs.persistence.entity.VitalsEntity;
import com.jlabs.service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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
  VitalService vitalService;

  @Autowired
  CurrentMedicalService currentMedicalService;

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
    log.info("Visit request");
    log.debug("Visit request {}", visit);
    final String visit1 = visitService.createVisit(visit);
    return new ResponseEntity<>(visit1, HttpStatus.OK);
  }

  @GetMapping("/vital")
  @ResponseBody
  public ResponseEntity<Optional> getVitalMedicalInfo(@RequestParam(value = "patientId", required = false) int patientId) {
    final Optional<List<VitalsEntity>> vitalsMedicalEntities = vitalService.getVitalMedical(patientId);
    return new ResponseEntity<>(vitalsMedicalEntities, HttpStatus.OK);
  }

  @PostMapping("/vital")
  @ResponseBody
  public ResponseEntity<String> createVitalMedicalInfo(@RequestBody Vital vital) {
    log.info("Vital-Medical request");
    log.debug("Vital-Medical request {}", vital);
    final String vitalMedical1 = vitalService.createVitalMedical(vital);
    return new ResponseEntity<>(vitalMedical1, HttpStatus.OK);
  }

  @GetMapping("/current-medical")
  @ResponseBody
  public ResponseEntity<Optional> getCurrenMedicalInfo(@RequestParam(value = "patientId", required = false) int patientId) {
    final Optional<List<CurrentMedicalEntity>> currentMedicalEntities = currentMedicalService.getCurrentMedical(patientId);
    return new ResponseEntity<>(currentMedicalEntities, HttpStatus.OK);
  }

  @PostMapping("/current-medical")
  @ResponseBody
  public ResponseEntity<String> createCurrentMedicalInfo(@RequestBody CurrentMedical currentMedical) {
    log.info("Current-Medical request");
    log.debug("Current-Medical request {}", currentMedical);
    final String medicalServiceCurrentMedical = currentMedicalService.createCurrentMedical(currentMedical);
    return new ResponseEntity<>(medicalServiceCurrentMedical, HttpStatus.OK);
  }

  @GetMapping("/appointments")
  @ResponseBody
  public ResponseEntity<Optional> getPatientAppointment(@RequestParam(value = "doctorName",required = false) String doctorName, @RequestParam(value = "appointmentDate",required = false) String appointmentDate ){
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
