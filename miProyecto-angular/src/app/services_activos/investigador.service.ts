import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InvestigadorService {

  private baseUrl = "http://localhost:8000/api/";


  constructor(
    private http:HttpClient) {}

   createInv(data){
     let json = JSON.stringify(data);
     const header = new HttpHeaders().set( 'Content-Type', 'application/json');
     return this.http.post(`${this.baseUrl}store`, json ,{headers: header});
   }


   getInvestigador(): Observable<any> {
  
    const header = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(`${this.baseUrl}investigador-index`,{headers: header});
    // console.log(this.http.get(`${this.baseUrl}investigador-index`));
    // .map((response: Response)=> response.json())
   }   

}
