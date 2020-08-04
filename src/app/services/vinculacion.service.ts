import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Vinculacion } from '../models/vinculacion';
import {Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VinculacionService {
  url : string = "https://localhost:44308/api/Vinculacion";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'      
    })
  };

  constructor(private http:HttpClient) { }

  save(a:Vinculacion) : Observable<any> {
    let maquinariaBody = JSON.stringify(a);    
    if(a.idvinculacion === undefined){      
      return this.http.post<any>(this.url, maquinariaBody, this.httpOptions);
    }
    return this.http.put<any>(this.url, maquinariaBody, this.httpOptions);
  }


  retrieve(id:number): Observable<Vinculacion> {
    return this.http.get<Vinculacion>(this.url + "/" + id, this.httpOptions)
      .pipe(
        retry(1)
      );
  } 



  delete(a: Vinculacion) : Observable<any> {
    return this.http.delete<any>(this.url + '/' + a.idvinculacion, 
      this.httpOptions);
  }


  list(): Observable<Vinculacion[]> {
    return this.http.get<Vinculacion[]>(this.url, this.httpOptions)
      .pipe(
        retry(1)
      );
  }




}
