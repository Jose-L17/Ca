import { Component, OnInit } from '@angular/core';

import { modulo } from '../modulo/modulo';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;
  text = " ";

  Operacion = " ";

  ngOnInit() {
  }

  Modulo() {
    let myresult = 1;
    myresult = modulo(this.operator1, this.operator2);
    this.result = myresult;
    this.Operacion = " % "
    this.text = "El Modulo es: " + this.result;
  }

}
