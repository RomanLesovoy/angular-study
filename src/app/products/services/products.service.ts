import { Injectable } from '@angular/core';
import { Product } from '../interfaces';
import { DatabaseService } from '../../shared/database.service';
import { BehaviorSubject, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: BehaviorSubject<Product[]> = new BehaviorSubject([]) as unknown as BehaviorSubject<Product[]>;
  public productsObservable: Observable<Product>;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public error: BehaviorSubject<string> = new BehaviorSubject('');
  private storageKey: string = 'products-storage';

  constructor (private dbService: DatabaseService) {
    this.getProductsFromDb();
    const { observable, subject } = this.dbService.getObservable<Product>(this.storageKey);
    this.productsObservable = observable;

    const newProduct: Product = { category: 'laptop', description: '', id: '005', inStock: 1, name: 'Lenovo', price: 1000, rating: 9.9 };
    setTimeout(() => { subject.next(newProduct); subject.complete() }, 7000);
  }

  async getProductsFromDb() {
    this.isLoading.next(true);
    try {
      const products = await this.dbService.get<Product[]>(this.storageKey);
      this.products.next(products);
    } catch (e) {
      this.error.next(e as string);
    } finally {
      this.isLoading.next(false);
    }
  }
}
