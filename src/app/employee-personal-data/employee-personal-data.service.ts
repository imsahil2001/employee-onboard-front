import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeePersonalDataService {
  baseUrl = 'http://localhost:8081/batch1_controller/saveEmployeeDetails';
  statesUrl = 'http://localhost:8081/batch1_controller/commonutils/getStates';
  citiesUrl = 'http://localhost:8081/batch1_controller/commonutils/getCities?=';
  genderUrl = 'http://localhost:8081/batch1_controller/commonutils/getGenders';
  maritalStatusUrl = 'http://localhost:8081/batch1_controller/commonutils/getmaritalstatus';


  constructor(private http: HttpClient) { }

  savePersonalDetails(data: any) {

    const requestOptions = { headers: new HttpHeaders({ 'content-type': "application/json" }) };

    return this.http
      .post<any>(this.baseUrl, JSON.stringify(data), requestOptions)
      .subscribe((response: any) => {
        console.log(response.emp_id);
      });
  }


  getStatesFromDb() {
    return this.http.get<any>(this.statesUrl).subscribe((data: any) => { console.log(data); })
  }

  getCitiesFromStates(stateName: string) {
    return this.http.get<any>(`${this.citiesUrl}"${stateName}"`).subscribe((data: any) => { console.log(data); })
  }

  getMaritalStatusFromDb() {
    return this.http.get<any>(this.maritalStatusUrl).subscribe((data: any) => { console.log(data); })
  }

  getGenderFromDb() {
    return this.http.get<any>(this.genderUrl).subscribe((data: any) => { console.log(data); })
  }
}
