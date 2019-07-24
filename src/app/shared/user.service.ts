
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpResponse } from "@angular/common/http";
import {Observable} from 'rxjs';
import { Usermodel } from './usermodel';


 
@Injectable()
export class UserService {
  readonly rootUrl = 'https://localhost:44325';
  constructor(private http: HttpClient) { }
 
  registerUser(user : Usermodel){
    const body: Usermodel = {
      UserName:user.UserName,
   Password:user.Password,
    FirstName:user.FirstName,
    LastName:user.LastName,
    Email:user.Email,
    }
    var reqHeader= new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl  + '/api/User/Register', body,{headers:reqHeader});
  }
  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }
  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims',{headers : new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('userToken')})});
  }

}