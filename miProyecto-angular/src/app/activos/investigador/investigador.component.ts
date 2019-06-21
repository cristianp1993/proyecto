import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services_activos/investigador.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.css']
})
export class InvestigadorComponent implements OnInit {

  public form = {
    inv_nombre : null,
    inv_apellPater : null,
    inv_apellMater: null,
    inv_cedula: null,
    inv_correo: null,
    inv_telefono: null,
    fk_ciu_codigo: null,
    fk_ent_codigo: null
  }

  mostrar : boolean = false;
  mensaje :string = "";

  constructor(private investigador: InvestigadorService) { }

  ngOnInit() {   
    
  }

  onSubmit(){
    console.log(this.form);
    this.investigador.createInv(this.form).subscribe(
      data => console.log(data),
      error => console.log(error));
      swal.fire({
        title: 'Hecho!',
        html: 'Investigador agregado',
        type: 'success',
        timer: 2000
      })
      
  }

  

  mostrarForm(){
    this.mostrar = !this.mostrar;
  }
}
