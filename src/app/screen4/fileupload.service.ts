import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileuploadService {
  savebaseUrl = 'http://localhost:8080/hrmscontroller/employee/pf/saveUploadedPFDoc';
  getpdfbaseurl='http://localhost:8080/hrmscontroller/employee/pf/downloadUploadedPFDoc';
  httpClient: any;
  constructor(private http: HttpClient) { }

  savePdfDetails(data: any) {

    const requestOptions = { headers: new HttpHeaders({ 'content-type': "application/json" }) };
    const str=JSON.stringify(data);

    return this.http
      .post<any>(this.savebaseUrl, str, requestOptions)
      .subscribe((response: any) => {
        console.log(response.emp_id);
      });
    }

      getPdfDetails() {

        return this.http.get(this.getpdfbaseurl);
  }
  savedownloadpdf(data: any) {

    const requestOptions = { headers: new HttpHeaders({ 'content-type': "application/json" }) };
    const str=JSON.stringify(data);

    return this.http
      .post<any>(this.getpdfbaseurl, str, requestOptions)
      .subscribe((response: any) => {
        console.log(response.emp_id);
      });
    }

}