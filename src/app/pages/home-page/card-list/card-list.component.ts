import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.css',
    imports: [CardComponent]
})
export class CardListComponent {
    @Input()
    sectionId: string = '';
    @Input()
    sectionClass: string = '';
    @Input()
    sectionTitle: string = 'Default title';
}
