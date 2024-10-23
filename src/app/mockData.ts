export interface Product {
  id: number;
  image: string;
  name: string;
  discount: number;
  price: number;
  sku: string;
  token: string;
  productID: number;
  isActive: boolean;
  countryCode: string;
  itemUrl: string;
  tags: string[];
}

export const products: Product[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      discount: 10,
      price: 100,
      sku: 'SKU001',
      token: 'abc123',
      productID: 1,
      isActive: true,
      countryCode: 'US',
      itemUrl: 'https://example.com/product-1',
      tags: ['electronics', 'new', 'sale']
  },
  {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      discount: 5,
      price: 150,
      sku: 'SKU002',
      token: 'def456',
      productID: 2,
      isActive: false,
      countryCode: 'CA',
      itemUrl: 'https://example.com/product-2',
      tags: ['furniture', 'popular']
  },
  {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Product 3',
      discount: 15,
      price: 200,
      sku: 'SKU003',
      token: 'ghi789',
      productID: 3,
      isActive: true,
      countryCode: 'UK',
      itemUrl: 'https://example.com/product-3',
      tags: ['clothing', 'discount']
  },
  {
      id: 4,
      image: 'https://via.placeholder.com/150',
      name: 'Product 4',
      discount: 0,
      price: 300,
      sku: 'SKU004',
      token: 'jkl012',
      productID: 4,
      isActive: true,
      countryCode: 'US',
      itemUrl: 'https://example.com/product-4',
      tags: ['sports', 'new']
  },
  {
      id: 5,
      image: 'https://via.placeholder.com/150',
      name: 'Product 5',
      discount: 25,
      price: 80,
      sku: 'SKU005',
      token: 'mno345',
      productID: 5,
      isActive: false,
      countryCode: 'DE',
      itemUrl: 'https://example.com/product-5',
      tags: ['outdoor', 'clearance']
  },
  {
      id: 6,
      image: 'https://via.placeholder.com/150',
      name: 'Product 6',
      discount: 10,
      price: 120,
      sku: 'SKU006',
      token: 'pqr678',
      productID: 6,
      isActive: true,
      countryCode: 'UK',
      itemUrl: 'https://example.com/product-6',
      tags: ['kitchen', 'best-seller']
  },
  {
      id: 7,
      image: 'https://via.placeholder.com/150',
      name: 'Product 7',
      discount: 30,
      price: 50,
      sku: 'SKU007',
      token: 'stu901',
      productID: 7,
      isActive: false,
      countryCode: 'CA',
      itemUrl: 'https://example.com/product-7',
      tags: ['beauty', 'gift']
  },
  {
      id: 8,
      image: 'https://via.placeholder.com/150',
      name: 'Product 8',
      discount: 12,
      price: 90,
      sku: 'SKU008',
      token: 'vwx234',
      productID: 8,
      isActive: true,
      countryCode: 'DE',
      itemUrl: 'https://example.com/product-8',
      tags: ['clothing', 'eco-friendly']
  },
  {
      id: 9,
      image: 'https://via.placeholder.com/150',
      name: 'Product 9',
      discount: 0,
      price: 500,
      sku: 'SKU009',
      token: 'yzb567',
      productID: 9,
      isActive: true,
      countryCode: 'US',
      itemUrl: 'https://example.com/product-9',
      tags: ['luxury', 'premium']
  },
  {
      id: 10,
      image: 'https://via.placeholder.com/150',
      name: 'Product 10',
      discount: 20,
      price: 75,
      sku: 'SKU010',
      token: 'cde890',
      productID: 10,
      isActive: true,
      countryCode: 'UK',
      itemUrl: 'https://example.com/product-10',
      tags: ['tech', 'sale']
  },
  {
      id: 11,
      image: 'https://via.placeholder.com/150',
      name: 'Product 11',
      discount: 18,
      price: 130,
      sku: 'SKU011',
      token: 'fgh123',
      productID: 11,
      isActive: true,
      countryCode: 'DE',
      itemUrl: 'https://example.com/product-11',
      tags: ['home', 'popular']
  },
  {
      id: 12,
      image: 'https://via.placeholder.com/150',
      name: 'Product 12',
      discount: 35,
      price: 55,
      sku: 'SKU012',
      token: 'ijk456',
      productID: 12,
      isActive: false,
      countryCode: 'CA',
      itemUrl: 'https://example.com/product-12',
      tags: ['fashion', 'limited']
  },
  {
      id: 13,
      image: 'https://via.placeholder.com/150',
      name: 'Product 13',
      discount: 0,
      price: 600,
      sku: 'SKU013',
      token: 'lmn789',
      productID: 13,
      isActive: true,
      countryCode: 'US',
      itemUrl: 'https://example.com/product-13',
      tags: ['gadgets', 'new']
  },
  {
      id: 14,
      image: 'https://via.placeholder.com/150',
      name: 'Product 14',
      discount: 8,
      price: 95,
      sku: 'SKU014',
      token: 'opq012',
      productID: 14,
      isActive: false,
      countryCode: 'UK',
      itemUrl: 'https://example.com/product-14',
      tags: ['sports', 'sale']
  },
  {
      id: 15,
      image: 'https://via.placeholder.com/150',
      name: 'Product 15',
      discount: 22,
      price: 110,
      sku: 'SKU015',
      token: 'rst345',
      productID: 15,
      isActive: true,
      countryCode: 'CA',
      itemUrl: 'https://example.com/product-15',
      tags: ['garden', 'special-offer']
  }
];