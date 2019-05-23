import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/services/jarwis.service';
import { SnotifyService } from 'ng-snotify';


@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email : null
  }

  public error = null;

  constructor(private jarwis :JarwisService,
              private notify : SnotifyService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.notify.info("Espere por favor",{timeout:4000});
    this.jarwis.sendPasswordResetLink(this.form).subscribe(
      data =>  this.respuesta(data),
      error => this.notify.error(error.error.error)
    );
  }

  respuesta(res){
    this.notify.success(res.data,{timeout:0});
    this.form.email = null;
  }

  // errorCorreo(error){

  //   this.error = error.error.error;
  // }

}
