import { Component } from '@angular/core';
import { Prueba1Component } from './prueba1/prueba1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aplicación Acorde';

  constructor() { }
    resultado: string;

    recibirMensaje($event) {
      this.resultado = $event;
    }
}


