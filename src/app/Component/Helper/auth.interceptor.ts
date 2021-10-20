import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Token = localStorage.getItem("token");
    const isApiUrl = request.url.startsWith(`${environment.API_URL}`);
    if (Token && isApiUrl) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${Token}`                    
            }
        });
    }
    return next.handle(request);
  }
}
