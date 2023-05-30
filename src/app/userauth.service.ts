import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private http: HttpClient) { }

  signUp( url: string ,data: any){

    //let url="enter url here"
   return this.http.post(url, data)

  }
}
