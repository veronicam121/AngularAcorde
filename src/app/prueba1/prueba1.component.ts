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
  fechanac: string;
  edad: number;
  constructor() { }

  ngOnInit() {
  }
  guardar() {
    if (this.fechanac) {
      let fecha = new Date(this.fechanac);
      let diferencia = Date.now() - fecha.getTime();
      fecha = new Date(diferencia);
      this.edad = Math.abs(fecha.getUTCFullYear() - 1970);
      }
    }
  getInput() {
    return 'Nombre: ' + this.nombre + 'Apellido: ' + this.apellido + 'Edad: ' + this.edad;
    }
}
