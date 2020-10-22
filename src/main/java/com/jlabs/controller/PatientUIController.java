package com.jlabs.controller;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.service.PatientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.trace.http.HttpTrace;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Created by sjain on 5/25/20.
 */

@RestController
@RequestMapping("/patient/v1")
@Slf4j
public class  PatientController {

    @Autowired
    PatientService patientService;

    @PostMapping
    @ResponseBody
    public ResponseEntity<String> savePatient(@RequestBody Patient patient){
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
    public ResponseEntity<Optional> searchPatient(@RequestParam ("id") int id){
        final Optional<PatientEntity> patientResponse = patientService.searchPatient(id);
        return new ResponseEntity<>(patientResponse, HttpStatus.OK);
    }

  @GetMapping("/print")
  public String greeting( ) {
//    model.addAttribute("name", name);
    return "print";
  }


  @GetMapping("/register")
  public String register( ) {
    return "register";
  }


  @GetMapping("/search")
  public String search( ) {
    return "search";
  }
}
