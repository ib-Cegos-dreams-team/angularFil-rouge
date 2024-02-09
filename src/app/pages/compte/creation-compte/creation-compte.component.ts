import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-compte',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.css'
})
export class CreationCompteComponent {
  user = {
    gender: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.user);
    // You can add further logic here, like sending the data to a server
  }
}
