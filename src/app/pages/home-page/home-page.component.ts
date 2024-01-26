import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [BannerComponent]
})
export class HomePageComponent {

}
