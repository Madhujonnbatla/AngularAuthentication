import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import {Observable,of}from 'rxjs';
import{map,catchError,tap}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private_baseurl:string="https://localhost:44389/Api/Plants";

  constructor(private _http:HttpClient) {
  }
    getplants()
    {
     return this. _http.get(this.private_baseurl).pipe(map(this.extractdata),catchError(this.handleError<any>('plant get error')));

    }
    Addpro(plant:any):Observable<any>
    {
      return this. _http.post<any>(this.private_baseurl,plant).pipe(tap(plant),catchError(this.handleError<any>('product not Added')));
      
    }
    Deletepro(plant:any):Observable<any>{
      return this._http.delete(this.private_baseurl+"/"+plant.Id,plant).
      pipe(tap(plant),catchError(this.handleError<any>('Product delete Failed')));
    }
    Updatepro(plant:any):Observable<any>{
      return this._http.put<any>(this.private_baseurl+"/"+plant.Id,plant).
      pipe(tap(plant),catchError(this.handleError<any>('Product Edit Failed')));
    }
    extractdata(res:Response)
    {
      let body=res;
      console.log(body);
      return body||{};
    }
    private handleError <T>(Operation='Operation',result?:T)
    {
      return(error:any):Observable<T>=>{
        console.error(error);
        console.log("${Operation}failed:${error.message}");
        return of (result as T);
   
}
    }
}
