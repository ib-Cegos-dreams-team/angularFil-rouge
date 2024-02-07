import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
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
  user = this.formBuilder.group({
    gender: ['', Validators.required],
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    lastName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(15)]] ,
    phone: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
   
  },  { validators : confirmPasswordValidator }
  );
  constructor(private formBuilder: FormBuilder) { }

onSubmit() {
  console.log(this.user.value)
}
}