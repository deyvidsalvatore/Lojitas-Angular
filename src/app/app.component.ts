import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./layout/top-bar/top-bar.component";
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TopBarComponent, FooterComponent]
})
export class AppComponent {
  title = 'lojitas-angular';
}
