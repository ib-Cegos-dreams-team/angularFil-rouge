import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'

  authSubject = new BehaviorSubject<any>({
    user:null
  });

  constructor(public http: HttpClient) { }


  getToken(): string | null {
    return localStorage.getItem("jwt");
  }

  enregistrer(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, user)
  }

  connecter(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, user)
  }

  deconnecter(){
    localStorage.removeItem('token');
    this.authSubject.next({user:null});
  }

  getUserProfile():Observable<any>{
    const headers = new HttpHeaders({
      Authorization:`Bearer ${localStorage.getItem("jwt")}`
    })
    return this.http.get<any>(`${this.apiUrl}/api/utilisateurs/profile`, {headers}).pipe(
      tap((user)=>{
        const currentState = this.authSubject.value;
        this.authSubject.next({...currentState, user})
      })
    )
  }

}
