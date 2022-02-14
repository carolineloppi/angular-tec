import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intermediate',
  templateUrl: './intermediate.component.html',
  styleUrls: ['./intermediate.component.css'],
})
export class IntermediateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mappingTestsOldWay() {
    var numeros = [1, 2, 3];
    numeros.map(function (valor) {
      return valor * 2;
    });
  }

  mappingTestNewWay() {
    var numeros = [1, 2, 3];
    numeros.map((valor) => valor * 2);
  }
}
