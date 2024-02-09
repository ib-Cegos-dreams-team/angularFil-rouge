import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../confirm-password-validator';
import { CommonModule } from '@angular/common';
import { CreationCompteService } from '../../../services/creation-compte.service';
import User from '../../../models/user.model';

@Component({
  selector: 'app-creation-compte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.css',

})
export class CreationCompteComponent implements OnInit {
  

  userForm: FormGroup = this.formBuilder.group({
    gender: ['', Validators.required],
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  })

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private creationCompteService: CreationCompteService) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  
  onSubmit() {
    console.log(this.userForm.value)
    if (this.userForm.valid) {
      this.creationCompteService.addUser(this.userForm.value)
        .subscribe((user: User) => {
          console.log('Données envoyées avec succès',user);
          // Réinitialiser le formulaire après l'envoi réussi
          this.userForm.reset();
        }, (error: any) => {
          console.error('Erreur lors de l\'envoi des données', error);
        });
    }
  }
}
