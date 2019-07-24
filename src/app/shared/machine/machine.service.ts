import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import {Observable,of}from 'rxjs';
import{map,catchError,tap}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

 
  private_baseurl:string="https://localhost:44389/Api/Machines";

  constructor(private _http:HttpClient) {
  }
    getplants()
    {
     return this. _http.get(this.private_baseurl).pipe(map(this.extractdata),catchError(this.handleError<any>('plant get error')));
  
    }
    Addpro(machine:any):Observable<any>
    {
      return this. _http.post<any>(this.private_baseurl,machine).pipe(tap(machine),catchError(this.handleError<any>('product not Added')));
      
    }
    Deletepro(machine:any):Observable<any>{
      return this._http.delete(this.private_baseurl+"/"+machine.Id,machine).
      pipe(tap(machine),catchError(this.handleError<any>('Product delete Failed')));
    }
    Updatepro(machine:any):Observable<any>{
      return this._http.put<any>(this.private_baseurl+"/"+machine.Id,machine).
      pipe(tap(machine),catchError(this.handleError<any>('Product Edit Failed')));
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
