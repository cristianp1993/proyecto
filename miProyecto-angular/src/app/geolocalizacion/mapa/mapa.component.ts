import { Component, OnInit } from '@angular/core';
import Map from "ol/Map";
import  OSM  from "ol/source/OSM";
import  Tile  from "ol/layer/Tile";
import  View  from "ol/View";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }
     
  ngOnInit() {
    this.mapaInicial();
  }

  
  mapaInicial(){
    let map
    map = new Map ({
        target: 'map',
        layers:[
            new Tile({
            source: new OSM()
          })
        ],
        view : new View({
          center:[37.41, 8.82],
          zoom:4
        })
    })
  }//FIN mAPA INICIAL

}
