import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.css']
})
export class InvestigadorComponent implements OnInit {

  form : {
    cedula: null,
    nombre: null,
    ape_paterno : null,
    ape_materno : null,
    correo : null,
    telefono : null,
    ciudad: null,
    entidad: null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }

  

}
