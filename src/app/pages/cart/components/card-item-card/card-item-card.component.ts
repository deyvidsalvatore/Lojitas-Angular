import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../../services/cart.service';

@Component({
  selector: 'app-card-item-card',
  standalone: true,
  imports: [],
  templateUrl: './card-item-card.component.html',
  styleUrl: './card-item-card.component.css'
})
export class CardItemCardComponent {
  @Input() item: CartItem;
  @Output() itemQuantityUpdate = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<void>();
  
  onQuantityChange(quantity: number) {
    this.itemQuantityUpdate.next(quantity);
  }

  onRemoveItem() {
    this.removeItem.next();
  }
}
