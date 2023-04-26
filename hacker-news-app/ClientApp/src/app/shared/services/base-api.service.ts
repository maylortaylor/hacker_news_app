import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Observer } from "../models/observer";

@Injectable()
export class BaseApiService {
  genericError = "";
  baseUrl = "";

  private httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
      })
  };

  constructor (
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string
  ) {
    this.baseUrl = baseUrl;
    this.genericError = `Some Error occcured, Please contact Administrator for the Errors`;
  }

  /**
   * Send a GET request
   * @param url
   * @returns {Observable<T>}
   */
  public get<T>(url: string): Observable<T> {
    const fullApiUrl: string = `${this.baseUrl}${url}`;
    let response = this.http.get<T>(fullApiUrl, this.httpOptions);

    // return new Observable((observer: Observer) => {
    //   observer.next(response);
    //   observer.complete();
    //   observer.error();
    // });

    return Observable.create((observer: Observer) => {
      response.subscribe(response => {
        observer.next(response);
        observer.complete();
      }, (error) => {
        observer.error([{ title: error.name, detail: this.genericError, error }]);
      });
    });
  }
}
