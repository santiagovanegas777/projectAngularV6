import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and set the new header in one step.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${sessionStorage.getItem('token-app')}`)
    });

    // send the newly created request
    return next.handle(authReq);
  }
}
