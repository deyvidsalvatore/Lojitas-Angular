import { Component } from '@angular/core';
import { DealsComponent } from './components/deals/deals.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DealsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
