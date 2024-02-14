import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private auth: AuthService) { }



  connexionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  showForm(){
    const form = document.querySelector('.dropdown') as HTMLElement;
    form.classList.toggle('form-hidden');
  }


  onSubmit() {
    console.log(this.connexionForm.value);
    this.auth.connecter(this.connexionForm.value).subscribe({
      next:(response) => {
        console.log("sign up success", response)
      }
    })
    this.connexionForm.reset();
    this.showForm();
  }
}
