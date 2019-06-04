import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InvestigadorService {

  private baseUrl = "http://localhost:8000/api/";

  constructor(
    private http:HttpClient) {
    
   }

   createInv(data):Observable<any>{
     let json = JSON.stringify(data);
     let params = 'json='+ json;
     let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
   
     return this.http.post(`${this.baseUrl}investigador/store`, params,{ headers: headers});
   }
}
