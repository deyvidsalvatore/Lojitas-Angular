import { Component } from '@angular/core';
import { PRODUCTS } from '../../../../data/product.data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = PRODUCTS;
}
