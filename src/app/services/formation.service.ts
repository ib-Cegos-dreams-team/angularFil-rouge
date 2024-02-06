import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Formation from '../models/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiURL = 'http://localhost:8080/formations';
  constructor(private httpClient: HttpClient) { }

  getFormations(): Observable<Formation[]>{ 
    return this.httpClient.get<Formation[]>(`${this.apiURL}/all`);
  }
}
