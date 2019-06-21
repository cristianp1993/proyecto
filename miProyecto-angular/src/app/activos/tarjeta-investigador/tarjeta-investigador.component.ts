import { Component, OnInit } from '@angular/core';
import { InvestigadorService } from 'src/app/services_activos/investigador.service';

@Component({
  selector: 'app-tarjeta-investigador',
  templateUrl: './tarjeta-investigador.component.html',
  styleUrls: ['./tarjeta-investigador.component.css']
})
export class TarjetaInvestigadorComponent implements OnInit {

   public invest = null;

  constructor( private investigador: InvestigadorService) { 
    
  }

  ngOnInit() {
    // mostrar investigaores traidos desde el servicio
    this.investigador.getInvestigador().subscribe(
      data=>{
        if(data.status == 'success'){
          this.invest = data.investigador
        }
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
