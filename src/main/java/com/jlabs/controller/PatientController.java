package com.jlabs.controller;

import com.jlabs.model.Patient;
import com.jlabs.model.Visit;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.persistence.entity.VisitEntity;
import com.jlabs.service.PatientService;
import com.jlabs.service.VisitService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
                                                @RequestParam(value = "lastName", required = false) String lastName) {
    final Optional<List<Patient>> patientResponse = patientService.searchPatient(id, firstName, lastName);
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
}
