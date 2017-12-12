import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.scss']
})
export class Prueba1Component implements OnInit {

  edad: number;
  mensaje: string;
  @Output() output = new EventEmitter<string>();
  @Input()
  usuario: {
    nombre: string;
    apellido: string;
    fechanac: string;
  };

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    if (this.usuario.fechanac) {
      let fecha = new Date(this.usuario.fechanac);
      let diferencia = Date.now() - fecha.getTime();
      fecha = new Date(diferencia);
      this.edad = Math.abs(fecha.getUTCFullYear() - 1970);
      this.mensaje = 'Nombre: ' + this.usuario.nombre + ' Apellido: ' + this.usuario.apellido + ' Edad: ' + this.edad;
      }
    this.output.emit(this.mensaje);
    }
}
