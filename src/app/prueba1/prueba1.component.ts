import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component implements OnInit {

  nombre: string;
  apellido: string;
  fechanac: Date;

  constructor() { }

  ngOnInit() {
  }
//  sendValues(myForm: NgForm){
//     this.nombre = myForm.nombre;
//  }
}
