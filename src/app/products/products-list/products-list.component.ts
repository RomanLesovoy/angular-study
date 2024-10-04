import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces';
import { ProductComponent } from '../product/product.component';
import { BasketComponent } from '../basket/basket.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, BasketComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[];
  constructor (public productsService: ProductsService) {
    this.products = this.productsService.products;
  }
}
