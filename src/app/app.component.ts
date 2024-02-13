import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./commons/header/header.component";
import { FooterComponent } from "./commons/footer/footer.component";
import { NotFoundComponent } from "./commons/not-found/not-found.component";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, NotFoundComponent, FontAwesomeModule]
})
export class AppComponent {
  title = 'fil_rouge';
}
