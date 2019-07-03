import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';
import { ProyectoService } from 'src/app/services_activos/proyecto.service';
import { EntidadesService } from 'src/app/services_activos/entidades.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public form = {
    pro_nombre: null,
    pro_fecplan: null,
    pro_presu_plan: null,
    pro_presu_final: null,
    fk_are_codigo: null,
    pro_coor_x: null,
    pro_coor_y: null,
    fk_ent_codigo: null,
    fk_inv_codigo: null,
    pro_observ: null
  }

  mostrar : boolean = false;
  mensaje :string = "";
  public entidades;
  public tipo;
  public area;


  constructor(
    private _proyecto : ProyectoService,
    private _entidades : EntidadesService) { }

  ngOnInit() {
    // traer las entidades
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

    // traer tipo de proyectos
    this._proyecto.getTipoProjects().subscribe(
      data=>{
        if(data.status == 'success'){
          this.tipo = data.tipo
        }
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );

    // consumir el gerArea del servicio
    this._proyecto.getAreaProjects().subscribe(
      data=>{
        if(data.status == 'success'){
          this.area = data.area
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
    this._proyecto.createProject(this.form).subscribe(
      data => console.log(data),
      error => console.log(error));
      swal.fire({
        title: 'Hecho!',
        html: 'Proyecto creado',
        type: 'success',
        timer: 2000
      });

      // this._proyecto.getProjects();

  }  

  mostrarForm(){
    this.mostrar = !this.mostrar;
  }

}
