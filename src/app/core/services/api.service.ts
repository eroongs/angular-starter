import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private errorHandler(error: any) {
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams()) {
    return this.http.get(environment.baseUrl + path, { params })
      .pipe(catchError(this.errorHandler));
  }

  put(path: string, body: Object = {}) {
    return this.http.put(environment.baseUrl + path, JSON.stringify(body))
      .pipe(catchError(this.errorHandler));
  }

  post(path: string, body: Object = {}) {
    return this.http.post(environment.baseUrl + path, JSON.stringify(body))
      .pipe(catchError(this.errorHandler));
  }

  delete(path: string) {
    return this.http.delete(environment.baseUrl + path)
      .pipe(catchError(this.errorHandler));
  }
}
