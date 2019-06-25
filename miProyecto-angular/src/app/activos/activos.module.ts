import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { EntidadComponent } from './entidad/entidad.component';
import { GrupoInvestigacionComponent } from './grupo-investigacion/grupo-investigacion.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TarjetaInvestigadorComponent } from './tarjeta-investigador/tarjeta-investigador.component';
import { TajetaProyectoComponent } from './tajeta-proyecto/tajeta-proyecto.component';

@NgModule({
  declarations: [
    ProyectoComponent,
    InvestigadorComponent,
    EntidadComponent,
    GrupoInvestigacionComponent,
    TarjetaInvestigadorComponent,
    TajetaProyectoComponent
  ],
  exports:[
    ProyectoComponent,
    InvestigadorComponent,
    EntidadComponent,
    GrupoInvestigacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class ActivosModule { }
