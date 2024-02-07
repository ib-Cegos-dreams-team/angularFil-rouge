import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../confirm-password-validator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creation-compte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.css'
})
export class CreationCompteComponent {
  user = new FormGroup({
    gender: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(15)] ),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
   
  },  { validators : confirmPasswordValidator }
  );

onSubmit() {
  console.log(this.user.value)
}
}