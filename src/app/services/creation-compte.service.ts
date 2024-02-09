import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import User from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class CreationCompteService {
    [x: string]: any;

    private apiUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }



    save(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/users`, user);
    }

    /** POST : ajout d'un nouveau user à la base de données */
    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiUrl}/users`, user);
    }

    //Méthode pour envoyer les données à l'API backend
    sendData(user: User): Observable<any> {
        return this.http.post<any>('http://localhost:3000', user);
    }

}