import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HandelErrorService {

  errorMessage: string = '';
  constructor(private toastr: ToastrService) { }

  handelError(err: HttpErrorResponse) {
    if(err.error instanceof ErrorEvent) {
      this.errorMessage = `An error occurred ${err.error.message}`;
    } else {
      switch (err.status) {
        case 400:
          this.errorMessage = `${err.status}: Bad request.`;
          break;
        case 401:
          this.errorMessage = `${err.status}: You are unauthorized to do this action.`;
          break;
        case 403:
          this.errorMessage = `${err.status}: You don't have the permission to access the requsted resource.`;
          break;        
        case 404:
          this.errorMessage = `${err.status}: the requsted resource does not exist.`;
          break;
        case 500:
          this.errorMessage = `${err.status}: Internal Server Error.`;
          break;
        default:
          this.errorMessage = `Something went wrong.`;
          break;
      }
    }
    this.toastr.error(this.errorMessage);
  }
}
