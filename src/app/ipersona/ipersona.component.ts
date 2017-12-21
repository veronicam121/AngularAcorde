import { Component, OnInit } from '@angular/core';
import { Ipersona } from '../ipersona';
import { NewPerson } from '../newperson';

@Component({
  selector: 'app-ipersona',
  templateUrl: './ipersona.component.html',
  styleUrls: ['./ipersona.component.scss']
})
export class IpersonaComponent extends NewPerson implements OnInit {

  persona: Ipersona;
  edad: number;
  activado: boolean;

  constructor() {
    super();
 }

  ngOnInit() {
    this.persona = {
      nombre: 'Veronica',
      apellido: 'Machado',
      fechanac: new Date('12/29/1993'),
      pais: 'Venezuela',
      sexo: 'Femenino',
      calcularEdad(fechanac): number {
        if (fechanac) {
          let fecha = fechanac;
          let diferencia = Date.now() - fecha.getTime();
          fecha = new Date(diferencia);
          let edad = Math.abs(fecha.getUTCFullYear() - 1970);
          return edad;
        }
      }
    };
    this.edad = this.persona.calcularEdad(this.persona.fechanac);
    this.activado = true;
  }

  newPerson() {
    this.persona.apellido = 'Ramirez';
    this.persona.nombre = 'Alejandra';
    this.persona.fechanac = new Date('12/16/1997');
    this.persona.sexo = 'Masculino';
    this.persona.pais = 'Colombia';
    this.persona.email = 'veronicam121@hotmail.com';
    this.edad = this.persona.calcularEdad(this.persona.fechanac);
    this.activado = !this.activado;
  }
}
