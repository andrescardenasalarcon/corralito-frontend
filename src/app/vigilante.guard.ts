import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InicioSesionService } from './servicios/inicio-sesion.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard {

  constructor(private iniciarSesionService: InicioSesionService, private router: Router) {

  }

  //Si verifica o no el user
  canActivate(): boolean {
    if (this.iniciarSesionService.verificarUsuario()) {

      return true;
    }
    this.router.navigate(['/land/home']);
    return false;
  }
}


