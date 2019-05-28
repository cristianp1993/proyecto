import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestigadorService {

  private baseUrl = "http://localhost:8000/api/";

  constructor(
    private http:HttpClient) {
    
   }

   createInv(data){
     return this.http.post(`${this.baseUrl}store`, data);
   }
}
