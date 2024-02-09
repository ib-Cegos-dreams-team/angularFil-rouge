import { Component } from '@angular/core';
import { CreationCompteComponent } from "./creation-compte/creation-compte.component";

@Component({
    selector: 'app-compte',
    standalone: true,
    templateUrl: './compte.component.html',
    styleUrl: './compte.component.css',
    imports: [CreationCompteComponent]
})
export class CompteComponent {

}
