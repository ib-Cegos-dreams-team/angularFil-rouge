import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth'

  constructor(public http: HttpClient) { }

  enregistrer(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/signup`, user)
  }

  connecter(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/signin`, user)
  }

}