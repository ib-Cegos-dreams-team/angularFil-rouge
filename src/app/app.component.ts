import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./commons/header/header.component";
import { FooterComponent } from "./commons/footer/footer.component";
import { NotFoundComponent } from "./commons/not-found/not-found.component";
import { AuthService } from './Auth/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NotFoundComponent]
})
export class AppComponent {
  title = 'fil_rouge';

  user:any = null;

  constructor(public authService:AuthService){}

  ngOnInit(){
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log(auth);
        this.user = auth.user;
      }
    )
  }
}
