import { Component } from '@angular/core';
import { BtnContinueComponent } from '../homes/components/btn-continue/btn-continue.component';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [BtnContinueComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

}
