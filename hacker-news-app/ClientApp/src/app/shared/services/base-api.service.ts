import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { catchError, Observable, retry, throwError } from "rxjs";

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
    let response: Observable<T> = this.http.get<T>(fullApiUrl, this.httpOptions);

    return response.pipe(retry(1), catchError(this.handleErrors));
  }

  private handleErrors(error: any) {
    return throwError(() => error || this.genericError);
  }
}
