import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeePersonalDataComponent } from './employee-personal-data/employee-personal-data.component';
import { ReferencesComponent } from './references/references.component';
import { GeneralNominationsComponent } from './general-nominations/general-nominations.component';
import { MedicalComponent } from './medical-insurance/medical.component';

const routes: Routes = [
  { path: 'personal-information', component: EmployeePersonalDataComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'general-nomination-component', component: GeneralNominationsComponent },
  { path: 'medical-insurance', component: MedicalComponent },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
