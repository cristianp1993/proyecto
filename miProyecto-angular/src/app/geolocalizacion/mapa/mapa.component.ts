import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer,marker, polyline, icon } from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }
     
 

  ngOnInit() {    

  }

  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Marker 
  summit = marker([ 5.031934, -75.447203 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
    // .bindPopup('<b>Orden: </b>' + 'coordenadas.orden')
  });

  // Marker 
  paradise = marker([ 5.033591, -75.449971 ], {
    icon: icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
    // .bindPopup('<b>Orden: </b>' + 'coordenadas.orden')
  });

  // Path
  route = polyline([[ 5.031934, -75.447203 ],
    ]);

  // Layers de las capas
  layersControl = {
    baseLayers: {
      'Mapa Geologico': this.streetMaps,
      'Mapa Rural': this.wMaps
    },
    overlays: {
      'Proyectos planeados': this.summit,
      'Proyectos en ejecución': this.paradise,
      'Proyectos terminados': this.route
    }
  };

    // variable que contendra el mapa y los filtros
    // option1 = {
    //   layers: [ this.streetMaps, this.route, this.summit, this.paradise ],
    //   zoom: 15,
    //   center: latLng([ 5.0326150965888985, -75.45095066263227 ])
    // };

    option = {
      layers: [this.streetMaps, this.route, this.summit, this.paradise,
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        })
      ],
      zoom: 15,
      center: latLng([ 5.0326150965888985, -75.45095066263227 ])
    };

}
