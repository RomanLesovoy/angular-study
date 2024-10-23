import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, products } from '../mockData';
import { of, throwError, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products;
  private productsSubject = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getProducts(): Observable<Product[]> {
    // Эмуляция GET запроса
    return of(this.products).pipe(
      delay(500), // Задержка в 500 мс для имитации сетевого запроса
      tap(() => console.log('Продукты загружены'))
    );
  }

  addProduct(product: Product): Observable<Product> {
    // Эмуляция POST запроса
    const newProduct = { ...product, id: this.generateId() };
    this.products.push(newProduct);
    return of(newProduct).pipe(
      delay(500),
      tap(() => console.log('Продукт добавлен', newProduct))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    // Эмуляция PUT запроса
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = { ...product };
      return of(this.products[index]).pipe(
        delay(500),
        tap(() => console.log('Продукт обновлен', product))
      );
    }
    return throwError(() => new Error('Продукт не найден'));
  }

  deleteProduct(id: number): Observable<void> {
    // Эмуляция DELETE запроса
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(void 0).pipe(
        delay(500),
        tap(() => console.log('Продукт удален', id))
      );
    }
    return throwError(() => new Error('Продукт не найден'));
  }

  private generateId(): number {
    return Math.max(...this.products.map(p => p.id), 0) + 1;
  }
}
