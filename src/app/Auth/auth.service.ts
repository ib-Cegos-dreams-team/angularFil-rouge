import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'

  authSubject = new BehaviorSubject<any>({
    user:null
  });

  constructor(public http: HttpClient, private router:Router) { }


  getToken(): string | null {
    return localStorage.getItem("jwt");
  }

  enregistrer(user:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, user)
  }

  connecter(loginRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signin`, loginRequest).pipe(
      map((response: any) => { // Use 'any' type for flexibility
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('role', response.role); // Extract role from JSON
        return response; // Pass the full response through
      })
    );
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

  getUserRole(): Observable<string> {
    return this.getUserProfile().pipe(
      map((user) => user.role),
    );
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

}
