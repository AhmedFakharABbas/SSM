
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { IGenericRepository } from "./IGenericRepository";
import { map, catchError } from "rxjs/operators";

export abstract class GenericRepository<T> implements IGenericRepository<T> {

  reqHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('Token'), 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient,
    private endpoint: string,
    private endUrl: string) {

  }
  httpOptions: any;
  Post(item: any,action?:string): Observable<any> {
    return this.httpClient.post(this.endUrl + this.endpoint + action, item, { headers: this.reqHeader, }).pipe(map(this.extractData), catchError(this.handleError));
  }

  Put(item: any): Observable<any> {
    return this.httpClient.put(this.endUrl + this.endpoint, item, { headers: this.reqHeader }).pipe(map(this.extractData), catchError(this.handleError));
  }

  GetById(Id:number): Observable<any> {
    return this.httpClient
      .get(this.endUrl + this.endpoint + '/' + Id,  { headers: this.reqHeader })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  Delete(Id: number): Observable<any> {
    return this.httpClient
      .delete(this.endUrl + this.endpoint +  '/' + Id,  { headers: this.reqHeader })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  

  Get(): Observable<any> {
    return this.httpClient.get(this.endUrl + this.endpoint,  { headers: this.reqHeader }).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  extractData(res: Response) {
    let body = res;
    return body || {};
  }

  handleError(error) {

    if (error.status && typeof (error.error) == "object") {
      if (error.error === 401) {
        window.location.href = "/Login";
      }
    } else {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = 'Error: ' + error.error.message;
      } else {
        // server-side error
        errorMessage = 'Error Code: ' + error.status;
      }
      return throwError(errorMessage);
    }
  }
}
