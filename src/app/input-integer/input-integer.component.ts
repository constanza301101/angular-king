import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
 

  constructor() { }

@Input() 
 contador: number;
@Input() 
 max: number;
@Output()
 maxStock: EventEmitter<string> = new EventEmitter<string>();
 @Output()
  contadorChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upContador():void{
    if(this.contador < this.max){
    this.contador++;
    this.contadorChange.emit(this.contador);
    }
    else
    this.maxStock.emit("stock no suficiente");
  }

  downContador():void{
    if(this.contador >0){
    this.contador--;
    this.contadorChange.emit(this.contador);
  }
  }
   onChangeContador(event):void{
   console.log(event.target);
   this.contadorChange.emit(this.contador);
   }
}

