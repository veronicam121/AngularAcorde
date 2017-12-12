import { Component, Input, EventEmitter, ViewChild } from '@angular/core';
import { Prueba1Component } from './prueba1/prueba1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aplicación Acorde';
  usuario = {
    nombre: '',
    apellido: '',
    fechanac: ''
  };
  resultado: string;
  @ViewChild(Prueba1Component) child: Prueba1Component;

  constructor() {
   }

  recibirMensaje($event) {
    this.resultado = $event;
  }

  calcular() {
    this.child.guardar();
  }
}


