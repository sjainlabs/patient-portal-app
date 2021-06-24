package com.jlabs.controller;

import com.jlabs.model.Patient;
import com.jlabs.persistence.entity.PatientEntity;
import com.jlabs.service.PatientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

/**
 * Created by sjain on 5/25/20.
 */

@RestController
@Slf4j
public class PatientUIController {


  @GetMapping("/print")
  public ModelAndView greeting( ) {
//    model.addAttribute("name", name);
    ModelAndView mav = new ModelAndView("index");
    return mav;

  }


  @GetMapping("/register")
  public ModelAndView register( ) {

    ModelAndView mav = new ModelAndView("index");
    mav.addObject("version", "0.1");
    return mav;
  }


  @GetMapping("/search")
  public ModelAndView search( ) {
    ModelAndView mav = new ModelAndView("index");
    mav.addObject("version", "0.1");
    return mav;
  }

//  @GetMapping("/history")
//  public ModelAndView history( ) {
//    ModelAndView mav = new ModelAndView("index");
//    mav.addObject("version", "0.1");
//    return mav;
//  }
}
