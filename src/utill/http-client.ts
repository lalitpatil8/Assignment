import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
/*
 *  Class for GET,POST,DELETE etc
 */
@Injectable()
export class HttpClientCustom {
    private urlPrefix: string;
    private urlBleScanUrl: string;
    constructor(private httpClient: HttpClient) {
        this.urlPrefix = environment.BASE_API_URL;
    }

    /*
     * Generic GET network call..   */


    public get(url) {
        return this.httpClient.get(this.urlPrefix + url, this.setRequestHeader()).map((res: HttpResponse<any>) => res)
            .catch((err) => {
                // Do messaging and error handling here
                if (err.error && !(err.error instanceof Object))
                    if (err.status !== 404)
                        err.error = JSON.parse(err.error)
                return Observable.throw(err);
            })
    }

    /*
     * Generic POST network call..
     */

    public post(url, data) {
        return this.httpClient.post(this.urlPrefix + url, data, this.setRequestHeader()).map((res: HttpResponse<any>) => res)
            .catch((err) => {
                // Do messaging and error handling here
                if (err.error && !(err.error instanceof Object))
                    err.error = JSON.parse(err.error)
                return Observable.throw(err);
            })
    }

    /*
     * Generic PUT network call..
     */

    public put(url, data) {

        return this.httpClient.put(this.urlPrefix + url, data, this.setRequestHeader()).map((res: HttpResponse<any>) => res)
            .catch((err) => {
                // Do messaging and error handling here
                if (err.error && !(err.error instanceof Object))
                    err.error = JSON.parse(err.error)
                return Observable.throw(err);
            })
    }

    /*
     * Generic DELETE network call..
     */

    public delete(url) {
        return this.httpClient.delete(this.urlPrefix + url, this.setRequestHeader()).map((res: HttpResponse<any>) => res)
            .catch((err) => {
                // Do messaging and error handling here
                if (err.error && !(err.error instanceof Object))
                    err.error = JSON.parse(err.error)
                return Observable.throw(err);
            })
    }

    /*
     * Generic PATHCH network call..
     */

    public patch(url, data) {
        return this.httpClient.patch(this.urlPrefix + url, data, this.setRequestHeader()).map((res: HttpResponse<any>) => res)
            .catch((err) => {
                // Do messaging and error handling here
                if (err.error && !(err.error instanceof Object))
                    err.error = JSON.parse(err.error)
                return Observable.throw(err);
            })
    }

    setRequestHeader() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
}
