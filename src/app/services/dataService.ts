import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) { }
    configUrl = 'https://jsonplaceholder.typicode.com/users';

    getConfig(): Observable<any> {
        return this.http.get(this.configUrl)
        // .pipe(map(this.globals.extractData), catchError(this.globals.extractError))
    }
}