import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {

  @Input()
formation!: any;



}
