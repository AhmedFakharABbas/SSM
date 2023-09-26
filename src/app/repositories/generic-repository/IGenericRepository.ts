import { Observable } from "rxjs";



export interface IGenericRepository<T> {

  httpOptions: any;
  Post(item: any): Observable<any>;
  Put(item: any): Observable<any>;
  GetById(Id:number): Observable<any>;
  

  Get(): Observable<any>; 
  Delete(Id: number): Observable<any>;
  handleError(error: any);
} 