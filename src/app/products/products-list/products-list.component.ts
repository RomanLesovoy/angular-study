import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, ProductRender } from '../interfaces';
import { ProductComponent } from '../product/product.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { map, tap } from 'rxjs';
import { OutsideClickDirective } from '../../shared/directives/OutsideClick.directive';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, MatTableModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatCheckboxModule, MatSidenavModule, OutsideClickDirective],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Product[] = [];
  productsObserved: any = [];
  error: string = '';
  isLoading: boolean = true;
  displayedColumns: Array<string> = ['name', 'price', 'category', 'inStock', 'selected'];
  isClickedRow: ProductRender | null = null;

  constructor (public productsService: ProductsService) {
    this.productsService.productsObservable
      .pipe(
        map((p) => this.prepareProduct(p)),
        tap(console.info),
      )
      .subscribe({
        next: (p) => this.products = [...this.products, p],
        error: (e) => this.error = e,
        complete: () => this.isLoading = false,
      });
  }

  private prepareProduct(p: Product): ProductRender {
    return { ...p, price: `${p.price} $`, selected: false }
  }

  public onRowClick(row: ProductRender) {
    this.isClickedRow && this.isClickedRow?.id === row.id // clicked on current row
    ? this.isClickedRow = null // remove clicked
    : this.isClickedRow = row  // set new
  }
}
