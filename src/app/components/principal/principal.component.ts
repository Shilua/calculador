import { Component, OnInit } from '@angular/core';
import { MejorasService } from "../../services/mejoras.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mejoras: any;
  constructor(private mejorasService : MejorasService) { }

  ngOnInit(): void {
    this.mejorasService.getMejoras().then((data) => {
      this.mejoras = [];
      this.mejoras = data;
    })
  }

}
