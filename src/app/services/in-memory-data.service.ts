import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  private products = [
    { id: 1, name: 'Product 1', available: true, description: 'Sample product' },
    { id: 2, name: 'Product 2', available: false, description: 'Another product' },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find(product => product.id === id) || { id: 0, name: '', available: true, description: '' };
  }

  addProduct(product: any) {
    product.id = Math.max(...this.products.map(p => p.id)) + 1;
    this.products.push(product);
  }

  updateProduct(id: number, updatedProduct: any) {
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
