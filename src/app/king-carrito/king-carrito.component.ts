import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { ConjuntoCarritoService } from '../conjunto-carrito.service';
import { King } from '../king-list/king';

@Component({
  selector: 'app-king-carrito',
  templateUrl: './king-carrito.component.html',
  styleUrls: ['./king-carrito.component.scss']
})
export class KingCarritoComponent implements OnInit {

  ListaCompras: King[]
  ListaCompras$: any;
  constructor(private carrito:ConjuntoCarritoService) {
 this.ListaCompras$ =carrito.ListaCompras.asObservable
  }

  ngOnInit(): void {
  }

}
