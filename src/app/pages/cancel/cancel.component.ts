import { Component } from '@angular/core';
import { BtnContinueComponent } from "../homes/components/btn-continue/btn-continue.component";

@Component({
    selector: 'app-cancel',
    standalone: true,
    templateUrl: './cancel.component.html',
    styleUrl: './cancel.component.css',
    imports: [BtnContinueComponent]
})
export class CancelComponent {

}
