import { Component, OnInit } from '@angular/core';
import { King } from './king'
@Component({
  selector: 'app-king-list',
  templateUrl: './king-list.component.html',
  styleUrls: ['./king-list.component.scss']
})
export class KingListComponent implements OnInit {

  conjuntos : King[] =[
    {
      imagen :"assets/img/01.jpg",
      nombre :"Conjunto JH",
      talle : "L/XL",
      precio :400,
      stock :4,
      liquidacion :true
    },
    {
     imagen :"assets/img/06.jpg",
     nombre :"Conjunto RTH",
     talle : "M",
     precio : 70,
     stock : 0,
     liquidacion: false,
   },
   {
     imagen :"assets/img/03.jpg",
     nombre : "Conjunto PPP",
     talle : "S/M",
     precio :500,
     stock :1,
     liquidacion: false,
   },
   ];
  constructor() { }

  ngOnInit(): void {
  }

}