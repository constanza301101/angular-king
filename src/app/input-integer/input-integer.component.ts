import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { King } from '../king-list/king';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
  cambiadorContador: any;

  constructor() { }

@Input()  contador: number;
@Input()  max: number;
@Output() maxStock: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upContador():void{
    if(this.contador < this.max){
    this.contador++;
    this.cambiadorContador.emit(this.contador);
    }
    else
    this.maxStock.emit("stock no suficiente");
  }

  downContador():void{
    if(this.contador >0){
    this.contador--;
    this.cambiadorContador.emit(this.contador);
  }
  }
   onChangeContador(event):void{
   console.log(event.target);
   this.cambiadorContador.emit(this.contador);
   }
}

