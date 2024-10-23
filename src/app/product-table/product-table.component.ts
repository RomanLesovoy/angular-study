import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../mockData';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditModalComponent } from '../product-edit-modal/product-edit-modal.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  displayedColumns: string[] = ['product', 'sku', 'price', 'country', 'tags', 'actions'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();

  constructor(private dialog: MatDialog, private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.dataSource.data = products;
    });
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(ProductEditModalComponent, {
      width: '400px',
      data: {} as Product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.addProduct(result).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductEditModalComponent, {
      width: '400px',
      data: {...product}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.updateProduct(result).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }

  deleteProduct(product: Product): void {
    if (confirm('Вы уверены, что хотите удалить этот продукт?')) {
      this.productService.deleteProduct(product.id).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  getDiscountedPrice(product: Product): number {
    return product.price * (1 - product.discount / 100);
  }
}
