import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import Utilisateur from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';

@Component({
  selector: 'app-supprimer-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './supprimer-utilisateur.component.html',
  styleUrl: './supprimer-utilisateur.component.css'
})
export class SupprimerUtilisateurComponent {

  constructor(private utilisateurService: UtilisateurService ) {}

  public utilisateurs: Utilisateur[] = [];

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe((utilisateurs) => {
      this.utilisateurs = utilisateurs;
    });
  }

}
