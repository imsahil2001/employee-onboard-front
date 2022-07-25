import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeePersonalDataComponent } from './employee-personal-data/employee-personal-data.component';
import { ReferencesComponent } from './references/references.component';
import { GeneralNominationsComponent } from './general-nominations/general-nominations.component';
import { MedicalComponent } from './medical-insurance/medical.component';
import { LegendHeadingComponent } from './legend-heading/legend-heading.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeePersonalDataComponent,
    ReferencesComponent,
    GeneralNominationsComponent,
    MedicalComponent,
    LegendHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
