import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PatientInfoPrintComponent } from './patient-info-print/patient-info-print.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoaderSpinComponent } from './loader-spin/loader-spin.component';
import {DataTableModule} from "angular-6-datatable";
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentConfirmationComponent } from './appointment-confirmation/appointment-confirmation.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {AngularDateTimePickerModule} from "angular2-datetimepicker";

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientRegistrationComponent,
    PatientInfoPrintComponent,
    PagenotfoundComponent,
    LoaderSpinComponent,
    PatientHistoryComponent,
    PatientHeaderComponent,
    AppointmentViewComponent,
    AppointmentCreateComponent,
    AppointmentConfirmationComponent,
    // PatientHelper
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularDateTimePickerModule,
    RouterModule.forRoot([

      {
        path: 'register',
        component: PatientRegistrationComponent
      },
      {
        path: 'search',
        component: PatientSearchComponent
      },
      {
        path: 'print',
        component: PatientInfoPrintComponent
      },
      {
        path: 'history',
        component: PatientHistoryComponent
      },
      {
        path: 'appointment',
        component: AppointmentViewComponent
      },
      {
        path: 'appointment-create',
        component: AppointmentCreateComponent
      },
      {
        path: 'appointment-confirmation',
        component: AppointmentConfirmationComponent
      },
      {path: '', redirectTo: '/search', pathMatch: 'full'}, // redirect to `first-component`
      {path: '**', component: PagenotfoundComponent},
    ]),
    RouterModule.forChild([

      {
        path: 'register',
        component: PatientRegistrationComponent
      },
      {
        path: 'search',
        component: PatientSearchComponent
      },
      {
        path: 'print',
        component: PatientInfoPrintComponent
      },
      {
        path: 'history',
        component: PatientHistoryComponent
      },
      {
        path: 'appointment',
        component: AppointmentViewComponent
      },
      {
        path: 'appointment-create',
        component: AppointmentCreateComponent
      },
      {
        path: 'appointment-confirmation',
        component: AppointmentConfirmationComponent
      },
      {path: '', redirectTo: '/search', pathMatch: 'full'}, // redirect to `first-component`
      {path: '**', component: PagenotfoundComponent},
    ])
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
