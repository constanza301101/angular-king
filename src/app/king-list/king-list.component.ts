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
      nombre :"Conjunto Yellow",
      talle : "L/XL",
      precio :400,
      stock :4,
      liquidacion :true,
      contador:0,
    },
    {
     imagen :"assets/img/06.jpg",
     nombre :"Conjunto Light Blue",
     talle : "M",
     precio : 70,
     stock : 0,
     liquidacion: false,
     contador:0,
   },
   {
     imagen :"assets/img/03.jpg",
     nombre : "Conjunto Blue",
     talle : "S/M",
     precio :500,
     stock :1,
     liquidacion: false,
     contador:0,
   },
   ];
  constructor() { }

  ngOnInit(): void {
  }
  maxStock(m:string){
    alert(m);
  }
}
