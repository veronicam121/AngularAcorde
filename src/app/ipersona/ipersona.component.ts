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
  fechas: Date[];
  horas: string[];

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
    this.horas = [];
    this.fechas = [];
    this.edad = this.persona.calcularEdad(this.persona.fechanac);
    this.activado = true;
    this.fechas.push(new Date());
    this.horas.push(new Date().toLocaleTimeString());
    for (let i = 1 ; i <= 10 ; i++) {
      let fecha = this.fechas[i - 1];
      fecha.setHours(fecha.getHours() + 1 );
      this.horas.push(fecha.toLocaleTimeString());
      this.fechas.push(fecha);
    }
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
