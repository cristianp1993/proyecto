import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services_activos/investigador.service';

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.css']
})
export class InvestigadorComponent implements OnInit {

  public form = {
    nombre: null,
    apellidouno : null,
    apellidodos : null,
    cedula: null,
    correo : null,
    telefono : null,
    ciudad: null,
    entidad: null
  }

  constructor(private investigador: InvestigadorService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
    this.investigador.createInv(this.form).subscribe(
      data => console.log(data),
      error => console.log(error));
  }

  

}
