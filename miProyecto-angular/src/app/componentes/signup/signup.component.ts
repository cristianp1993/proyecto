import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  //objeto que guardara los datos de registro
  public form = {
    email : null,
    name : null,
    password : null,
    password_confirmation : null
  }
    
  public error= [];
  
  
  constructor(private jarwis:JarwisService,
              private token:TokenService,
              private route:Router) { }

  onSubmit(){
    console.log(this.form);
  
      this.jarwis.signup(this.form).subscribe(
      data => this.respuestaAutenticacion(data),
      // error => console.log(error),
      error => this.errorAutenticacion(error)       
      );      
  }

 

  respuestaAutenticacion(data){
    this.token.respuesta(data.access_token);
    this.route.navigateByUrl('/profile');

  };

   //mensaje de error de registro
   errorAutenticacion(error){
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
