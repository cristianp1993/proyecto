import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from 'src/app/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  
  public mensaje = [];
  public error = [];

  form ={
    email : null,
    password :null,
    password_confirmation :null,
    resetToken : null
  }
  constructor(
    private route:ActivatedRoute,
    private jarwis : JarwisService,
    private router : Router,
    private notify : SnotifyService
  ) {
    route.queryParams.subscribe(params=>{
      this.form.resetToken = params['token']
    })
   }//fin constructor

  ngOnInit() {
  }

  onSubmit(){
    this.jarwis.changePassword(this.form).subscribe(
      data=> this.respuesta(data),
      error => this.errorAutenticacion(error)
    )
  }

  respuesta(res){

    let _router = this.router;

    this.notify.confirm('Contraseña actualizada',{
      buttons:[
        {text: 'Okay',
        action: toster =>{_router.navigateByUrl('/login'),
        this.notify.remove(toster.id)
        },
      },]
    })    
  }
  
  errorAutenticacion(error){
    this.mensaje = error.error.errors;
    this.error = error.error.error[0];
  };

}
