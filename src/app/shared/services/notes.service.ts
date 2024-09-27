import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {
private readonly _HttpClient=inject(HttpClient);
  constructor() { }
  url:string = "https://note-sigma-black.vercel.app/api/v1/notes";
  addNoteAPI=(data:object):Observable <any> =>{
    return this._HttpClient.post(this.url , data , {headers:{'token':`3b8ny__${localStorage.getItem("token")}`}})
  }

getNotesApi=():Observable <any>=>{
  return this._HttpClient.get('https://note-sigma-black.vercel.app/api/v1/notes/allNotes')
}
getUserNotesApi=():Observable <any>=>{
  return this._HttpClient.get('https://note-sigma-black.vercel.app/api/v1/notes' , {headers:{'token':`3b8ny__${localStorage.getItem("token")}`}})


  
}
deletenote =(id:string):Observable<any>=>{
 return this._HttpClient.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`, {headers:{'token':`3b8ny__${localStorage.getItem("token")}`}})


}
updateNote=(id:string , data:object):Observable <any> =>{
  return this._HttpClient.put(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`, data ,{headers:{'token':`3b8ny__${localStorage.getItem('token')}`}} )
}
}
