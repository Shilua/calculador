import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mejoras: any;
  categoria: string;
  esteticas: any;
  mecanicas: any[];
  total: number = 0;
  aux : any;
  constructor() { }

  ngOnInit(): void {
    
  }


}
