import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';  
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else if (error.status) {
      errorMessage = error.error.message;
    }
    return throwError(errorMessage);
  }


  sendMail(correo: string, asunto: string, mensaje: string): Observable<any> {
    const requestBody: any = {
      correo: correo, 
      asunto: asunto,
      mensaje: mensaje
    };
    return this.http.post<any>('http://localhost:3000/sendMail', requestBody, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
