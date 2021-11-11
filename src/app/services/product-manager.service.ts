import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {
  private products: Product[] = [
    { name: 'Pants', quantity: 20, price: 7.99 },
    { name: 'Shoes', quantity: 50, price: 45.99 },
    { name: 'Hats', quantity: 10, price: 3.99 },
    { name: 'T-shirt', quantity: 10, price: 5.99 },
    { name: 'Dress', quantity: 24, price: 100.99 },
  ];

  constructor() { }

  getAllProducts() {
    return [...this.products];
  }

  getProductByName(name: string) {
    return { ...this.products.filter((product) => product.name === name) };
  }

  updateProductByName(name: string, quantity: number, price: number) {
    const index = this.products.findIndex((product) => product.name === name);
    this.products[index] = { name, quantity, price };
  }

  addNewProduct(product: Product) {
    this.products = this.products.concat(product);
  }

}
