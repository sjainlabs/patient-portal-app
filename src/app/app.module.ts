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

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientRegistrationComponent,
    PatientInfoPrintComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
      { path: '',   redirectTo: '/register', pathMatch: 'full' }, // redirect to `first-component`
      // { path: '**', component: PatientRegistrationComponent },
      { path: '**', component: PagenotfoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
