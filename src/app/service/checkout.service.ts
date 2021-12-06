import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }


  public docheckout(checkout){
    return this.http.post<any>("http://localhost:8080/common/addcheckout",checkout,{responseType : "text" as "json"});
 
   }
}


