import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _HttpClient=inject(HttpClient);
  decoded:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
  register=(data:object):Observable <any>=>{
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signUp' , data )

  }

  signIn=(data:object):Observable <any>=>{
    return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signIn' , data )

  }
 decodedToken =()=>{

  const token = localStorage.getItem('token')!;
  this.decoded = jwtDecode(token);
  console.log(this.decoded)
 }
}
