import { Injectable } from '@angular/core';
import  Map  from 'ol/map';
import Tile  from 'ol/layer/Tile';
import  OSM  from 'ol/source/OSM';
import View  from 'ol/View';

@Injectable({
  providedIn: 'root'
})
export class MapaService {
  public map = null;
  constructor() { }

  mapaInicial(){

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM
        })
      ],
      view: new View({
        center :[37.41, 8.82],
        zoom:4
      })
    })
  }
}


