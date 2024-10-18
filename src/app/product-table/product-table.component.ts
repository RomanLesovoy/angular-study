import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { products, Product } from '../mockData';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  displayedColumns: string[] = ['product', 'sku', 'price', 'country', 'tags', 'actions'];
  dataSource: MatTableDataSource<Product>;

  constructor() {
    this.dataSource = new MatTableDataSource(products);
  }

  ngOnInit(): void {}

  editProduct(product: Product): void {
    console.log('Редактирование продукта', product);
  }

  deleteProduct(product: Product): void {
    console.log('Удаление продукта', product);
  }

  getDiscountedPrice(product: Product): number {
    return product.price * (1 - product.discount / 100);
  }
}
