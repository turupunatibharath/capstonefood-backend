import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  public additem(data:any){
    return this.http.post<any>("http://localhost:8080/common/addProduct",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  public getitem(){
    return this.http.get<any>("http://localhost:8080/common/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  public delete(id:number){
    return this.http.delete<any>("http://localhost:8080/common/delete/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  public update(data:any ,id:number){
    return this.http.put<any>("http://localhost:8080/common/update/{id}"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}

