import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-admission',
  templateUrl: './patient-admission.component.html',
  styleUrls: ['./patient-admission.component.css']
})
export class PatientAdmissionComponent implements OnInit {
  departments: any=[];

  constructor() { }

  ngOnInit() {
    this.departments = this.getDepartment()
  }

  private getDepartment() {
    let departments =[];
    departments[0]="Pediatrics"
    departments[1]="Ortho"
    departments[2]="General Medicine"
    return departments;
  }
}
