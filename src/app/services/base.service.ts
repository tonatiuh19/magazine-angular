import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Options {
  headers?: HttpHeaders;
}

export class BaseService {
  private CONTENT_TYPE_HEADER = 'Content-Type';
  private APPLICATION_JSON = 'application/json; charset=utf-8';
  private RETRY = 0;
  private AUTHORIZATION = 'Authorization';

  constructor(protected http: HttpClient) {}

  protected handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  protected createDefaultOptions(): Options {
    const headers = new HttpHeaders({
      'Content-Type': this.APPLICATION_JSON,
    });
    return {
      headers: headers,
    };
  }

  protected doGet<T>(ServiceUrl: string): Observable<T> {
    return this.http
      .get<T>(ServiceUrl, this.createDefaultOptions())
      .pipe(retry(this.RETRY), catchError(this.handleError));
  }

  protected doPost<T, R>(ServiceUrl: string, body: T): Observable<R> {
    return this.http
      .post<R>(ServiceUrl, body, this.createDefaultOptions())
      .pipe(retry(this.RETRY), catchError(this.handleError));
  }

  protected doPut<T, R>(ServiceUrl: string, body: T): Observable<R> {
    return this.http
      .put<R>(ServiceUrl, body)
      .pipe(retry(this.RETRY), catchError(this.handleError));
  }

  protected doDelete<T>(ServiceUrl: string): Observable<T> {
    return this.http.delete<T>(ServiceUrl, this.createDefaultOptions());
  }
}
