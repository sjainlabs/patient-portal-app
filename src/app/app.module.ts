import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PatientInfoPrintComponent } from './patient-info-print/patient-info-print.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientRegistrationComponent,
    PatientInfoPrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
