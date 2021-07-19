import { Component, OnInit } from '@angular/core';
import { MejorasService } from 'src/app/services/mejoras.service';

@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.component.html',
  styleUrls: ['./mecanica.component.css']
})
export class MecanicaComponent implements OnInit {

  mejoras: any;
  categoria: string;
  esteticas: any;
  mecanicas: any[];
  total: number = 0;
  aux : any;
  constructor(private mejorasService : MejorasService) { }

  ngOnInit(): void {
    this.mejorasService.getMejoras().then((data) => {
      this.mejoras = [];
      this.mejoras = data;
    })
  }

  selectCategory(){
    this.mecanicas = this.mejoras[this.categoria];
  }

  calculatePriceMecanicas(upgrade:string, level: number){
    this.aux = this.mecanicas[upgrade];
    this.total += this.aux * level;
  }

}
