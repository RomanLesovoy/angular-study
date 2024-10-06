import { Component, Input } from '@angular/core';
import { ProductRender } from '../interfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: ProductRender;
}
