import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private _http: HttpClient) {}
    sendContent(contentData) {
        console.log('This is from sendContent in HttpService', contentData);
        return this._http.post('/sendEmail', contentData);
    }
}
