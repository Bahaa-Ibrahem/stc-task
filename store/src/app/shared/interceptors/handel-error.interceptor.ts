import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { HandelErrorService } from '../services/handel-error.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HandelErrorInterceptor implements HttpInterceptor {

  constructor(private error: HandelErrorService, private toastrService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifyRequest = req.clone({
      headers: req.headers.append('key', 'value')
    });
    return next.handle(req)
    .pipe(
      tap((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          this.toastrService.success("", "Success");
        }
        return event;
    }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
           this.error.handelError(err);
        }
      return new Observable<HttpEvent<any>>();
    }));
  }
}
