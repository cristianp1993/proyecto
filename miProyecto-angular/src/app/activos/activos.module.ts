import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { InvestigadorComponent } from './investigador/investigador.component';
import { EntidadComponent } from './entidad/entidad.component';
import { GrupoInvestigacionComponent } from './grupo-investigacion/grupo-investigacion.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ProyectoComponent,
    InvestigadorComponent,
    EntidadComponent,
    GrupoInvestigacionComponent
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
