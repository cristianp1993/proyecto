import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private baseUrl = "http://localhost:8000/api/";
  constructor(private _http : HttpClient) { }

  createProject(data){
    let json = JSON.stringify(data);
    const header = new HttpHeaders().set( 'Content-Type', 'application/json');
    return this._http.post(`${this.baseUrl}guardarProyecto`, json ,{headers: header});
  }

  getProjects(): Observable<any> {
  
    const header = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(`${this.baseUrl}proyecto-index`,{headers: header});
    // console.log(this.http.get(`${this.baseUrl}investigador-index`));
    // .map((response: Response)=> response.json())
   }   

  //  traer los tipos de proyectos
  getTipoProjects(): Observable<any> {
  
    const header = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(`${this.baseUrl}tipo-index`,{headers: header});
    // console.log(this.http.get(`${this.baseUrl}investigador-index`));
    // .map((response: Response)=> response.json())
   }   
  getAreaProjects(): Observable<any> {
  
    const header = new HttpHeaders().set( 'Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(`${this.baseUrl}area-index`,{headers: header});
    // console.log(this.http.get(`${this.baseUrl}investigador-index`));
    // .map((response: Response)=> response.json())
   }   

   
}
