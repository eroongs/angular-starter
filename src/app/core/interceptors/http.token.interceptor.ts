import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        //add token service to 'Authorization' in headers 

        const intercept = request.clone({
            setHeaders: headers
        });

        return next.handle(intercept);
    }
}