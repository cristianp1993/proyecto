import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services_activos/investigador.service';
import swal from'sweetalert2';
import { CiudadesService } from 'src/app/services_activos/ciudades.service';
import { EntidadesService } from 'src/app/services_activos/entidades.service';

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

  ciudades = null;
  entidades =  null;
  mostrar : boolean = false;
  mensaje :string = "";

  constructor(
    private investigador: InvestigadorService,
    private _ciudades: CiudadesService,
    private _entidades: EntidadesService) { }

  ngOnInit() {   
    // obtener ciudades para el select
    this._ciudades.getCiudades().subscribe(
      data=>{
        if(data.status == 'success'){
          this.ciudades = data.ciudad
        }
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
    // obtener entidades para el select
    this._entidades.getEntidades().subscribe(
      data=>{
        if(data.status == 'success'){
          this.entidades = data.entidad
        }
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
    
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
// ocultar formulario o mostarrlo de adicion
  mostrarForm(){
    this.mostrar = !this.mostrar;
  }


}
