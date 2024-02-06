import { Component } from '@angular/core';
import { FormationsListComponent } from "./formations-list/formations-list.component";

@Component({
    selector: 'app-formations-page',
    standalone: true,
    templateUrl: './formations-page.component.html',
    styleUrl: './formations-page.component.css',
    imports: [FormationsListComponent]
})
export class FormationsPageComponent {

}
