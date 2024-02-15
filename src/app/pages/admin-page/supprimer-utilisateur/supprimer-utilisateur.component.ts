import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../Auth/auth.service';
import { Component } from '@angular/core';
import Utilisateur from '../../../models/utilisateur.model';
import { UtilisateurService } from '../../../services/utilisateur.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-supprimer-utilisateur',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './supprimer-utilisateur.component.html',
  styleUrl: './supprimer-utilisateur.component.css'
})
export class SupprimerUtilisateurComponent {
  selectedUsers: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService ) {}

  public utilisateurs: Utilisateur[] = [];

  ngOnInit(): void {
    this.utilisateurService.getUtilisateurs().subscribe((utilisateurs) => {
      this.utilisateurs = utilisateurs;
    });
  }

  onCheckboxChange(utilisateur: Utilisateur) {
    const index = this.selectedUsers.findIndex(u => u.id === utilisateur.id);
    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(utilisateur);
    }
  }
  
  

}
