import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntidadesService {
  private baseUrl = "http://localhost:8000/api/";


  constructor(
    private http:HttpClient) { }


  getEntidades(): Observable<any> {
  
    const header = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(`${this.baseUrl}entidades-index`,{headers: header});
    // console.log(this.http.get(`${this.baseUrl}investigador-index`));
    // .map((response: Response)=> response.json())
   }   

}
