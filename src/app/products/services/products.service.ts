import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    { name: 'Хліб', price: 10, qty: 1 },
    { name: 'Яйця', price: 30, qty: 1 },
    { name: 'Сир', price: 45, qty: 1 },
    { name: 'Курка', price: 72, qty: 1 },
    { name: 'Рис', price: 20, qty: 1 },
    { name: 'Паста', price: 13, qty: 1 }
  ];

  basket: Product[] = [];
  fullPrice: number = 0;

  checkExistsInBasket(product: Product) {
    return this.basket.find((p) => p.name === product.name);
  }

  addToBasket(product: Product) {
    this.basket.push(product);
    this.countPrice();
  }

  removeFromBasket(product: Product) {
    this.basket = this.basket.filter((p) => p.name !== product.name);
    this.countPrice();
  }

  changeQty(product: Product, value: 1 | -1) {
    const productFound = this.checkExistsInBasket(product);
    productFound && (productFound.qty += value);
    this.countPrice();
  }

  countPrice() {
    this.fullPrice = this.basket.reduce((acc, p) => acc + (p.price * p.qty), 0);
    console.log(this.fullPrice)
  }
}
