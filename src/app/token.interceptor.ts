import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token_usta");
    const modificarPeticion = request.clone({
      headers: request.headers.set('authorization', 'Bearer ' + token),
    });
    return next.handle(modificarPeticion).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/land/home']);
          localStorage.removeItem("token_usta");
          localStorage.removeItem("foto_usta");
        }
        return throwError(() => error);
      })
    );
  }
}
