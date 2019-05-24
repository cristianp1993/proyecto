import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    MapaComponent
  ],
  exports: [
    MapaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapaModule { }
