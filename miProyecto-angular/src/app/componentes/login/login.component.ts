import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  //constructor
  constructor(private jarwis:JarwisService,
              private token:TokenService,
              private route:Router,
              private auth: AuthService) {
    
  }
  

  //objeto que obtendra los valores del logueo
  public form = {
    email: null,
    password: null
  };

  //variable que guardara el mensaje de error
  public error = null ;

  //metodo del click en el formulario
  onSubmit(){

      console.log(this.form);
      this.jarwis.login(this.form).subscribe(
      data => this.respuestaAutenticacion(data),
      // error => console.log(error),
      error => this.errorAutenticacion(error)        
      );      
   };

  // respuesta autenticacion
  respuestaAutenticacion(data){
    this.token.respuesta(data.access_token);
    this.auth.changeAuthStatus(true);
    this.route.navigateByUrl('/profile');

  };
    //mensaje de error de autenticacion
    errorAutenticacion(error){
      this.error = error.error.error;
    };

  ngOnInit() {
  }

}
