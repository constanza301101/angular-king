import { Injectable } from '@angular/core';
import { King } from './king-list/king';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConjuntoCarritoService {
  private _ListaCompras: King[]=[];
  ListaCompras: BehaviorSubject<King[]> = new BehaviorSubject([]);

  constructor() { }

      comprar(conjunto: King) {
      let item: King= this._ListaCompras.find((v1)=>v1.nombre == conjunto.nombre);
      if(!item){
        this._ListaCompras.push({ ... conjunto})
      } else{
        item.contador += conjunto.contador;
      }
      this.ListaCompras.next(this._ListaCompras);
      
    }
}
