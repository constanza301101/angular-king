import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-king-list',
  templateUrl: './king-list.component.html',
  styleUrls: ['./king-list.component.scss']
})
export class KingListComponent implements OnInit {
 conjunto1={
   "nombre":"Conjunto JH",
   "talle": "L/XL",
   "precio":400,
   "stock":4,
   "image":"assets/img/01.jpg",
 };
 conjunto2={
  "nombre":"Conjunto PL",
  "talle": "L/M",
  "precio":500,
  "stock":2,
  "image":"assets/img/03.jpg",
};

  constructor() { }

  ngOnInit(): void {
  }

}
