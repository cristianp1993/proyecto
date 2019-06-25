import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services_activos/proyecto.service';

@Component({
  selector: 'app-tajeta-proyecto',
  templateUrl: './tajeta-proyecto.component.html',
  styleUrls: ['./tajeta-proyecto.component.css']
})
export class TajetaProyectoComponent implements OnInit {

  public proyecto

  constructor(
    private _proyecto : ProyectoService
  ) { }

  ngOnInit() {

    this._proyecto.getProjects().subscribe(
      data=>{
        if(data.status == 'success'){
          this.proyecto = data.proyecto
        }
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
