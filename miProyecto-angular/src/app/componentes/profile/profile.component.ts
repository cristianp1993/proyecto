import { Component, OnInit } from '@angular/core';
import { MapaService } from 'src/app/services/mapa.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  miMapa = null
  constructor(private mapa : MapaService) { }

  ngOnInit() {
    this.miMapa;
  }


  mostrarMapa(){

    this.miMapa = this.mapa.mapaInicial();
  }

}
