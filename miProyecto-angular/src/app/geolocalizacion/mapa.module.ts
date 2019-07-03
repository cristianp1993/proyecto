import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    MapaComponent
  ],
  exports: [
    MapaComponent
  ],
  imports: [
    CommonModule,
    LeafletModule
    
  ]
})
export class MapaModule { }
