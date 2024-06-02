import { Component } from '@angular/core';
import { MiSesion } from 'src/app/modelos/mi-sesion';
import { InicioSesionService } from 'src/app/servicios/inicio-sesion.service';

@Component({
  selector: 'app-cabecera-dash',
  templateUrl: './cabecera-dash.component.html',
  styleUrls: ['./cabecera-dash.component.css']
})
export class CabeceraDashComponent {
  public objMiSesion: MiSesion;
  
  constructor(public sesion: InicioSesionService) {
    this.objMiSesion = sesion.obtenerDatosSesion();
  }
}
