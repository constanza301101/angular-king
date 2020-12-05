import { Component, OnInit } from '@angular/core';
import { ConjuntoCarritoService } from '../conjunto-carrito.service';
import { King } from './king'
@Component({
  selector: 'app-king-list',
  templateUrl: './king-list.component.html',
  styleUrls: ['./king-list.component.scss']
})
export class KingListComponent implements OnInit {

  conjuntos: King[] = [
    {
      imagen: "assets/img/01.jpg",
      nombre: "Conjunto Yellow",
      talle: "L/XL",
      precio: 400,
      stock: 4,
      liquidacion: true,
      contador: 0,
    },
    {
      imagen: "assets/img/06.jpg",
      nombre: "Conjunto Light Blue",
      talle: "M",
      precio: 70,
      stock: 0,
      liquidacion: false,
      contador: 0,
    },
    {
      imagen: "assets/img/03.jpg",
      nombre: "Conjunto Blue",
      talle: "S/M",
      precio: 500,
      stock: 1,
      liquidacion: false,
      contador: 0,
    },
  ];


  constructor(private carrito: ConjuntoCarritoService) {

  }

  ngOnInit(): void {
  }
 
  comprar(conjunto){
    if (conjunto.contador === 0){
      alert("La cantidad tiene que ser mayor a cero");
    }else{
      this.carrito.comprar(conjunto);
      conjunto.stock -= conjunto.contador; // a stock le resta la cantidad
      conjunto.contador = 0; // reinicia cantidad para la próxima compra
      this.comprar(conjunto);
    }

  }
  GetConjuntos(conjunto){    
    this.carrito.GetConjuntos(conjunto);
}

  maxStock(m: string) {
    alert(m);
  }
}
