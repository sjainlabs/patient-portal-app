package com.jlabs.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jlabs.model.Appointment;
import com.jlabs.model.Doctor;
import com.jlabs.model.Patient;
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
import java.util.List;
import java.util.Optional;

/**
 * Created by sjain on 5/25/20.
 */

@RestController
@RequestMapping("/doctor/v1")
@Slf4j
public class DoctorController {


  @Autowired
  DoctorService doctorService;


  @GetMapping("/doctors")
  @ResponseBody
  public ResponseEntity<Optional> getAllDoctors(){
    log.info("Get all Doctors");
    Optional<List<Doctor>> doctorList = doctorService.getAllDoctors();
    return new ResponseEntity<>(doctorList, HttpStatus.OK);
  }
}
