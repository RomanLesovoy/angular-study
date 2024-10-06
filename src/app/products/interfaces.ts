export interface Product {
  id: string,
  name: string,
  price: number,
  category: string,
  description: string,
  inStock: 1 | 0,
  rating: number,
}

export interface ProductRender extends Omit<Product, 'price'> {
  price: string;
  selected: boolean;
}
