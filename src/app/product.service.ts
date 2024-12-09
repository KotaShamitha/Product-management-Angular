import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Product {
  description: string;
  id: number;
  name: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private products = new BehaviorSubject<Product[]>([
    { id: 1, name: 'Product A', available: true, description: 'Description of Product A' },
    { id: 2, name: 'Product B', available: false, description: 'Description of Product B' },
  ]);

  // Fetch all products
  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  // Fetch a single product by ID
  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.value.find((product) => product.id === id);
    return new Observable((observer) => {
      observer.next(product);
      observer.complete();
    });
  }

  // Add a new product
  addProduct(product: Product): void {
    const currentProducts = this.products.value;
    this.products.next([...currentProducts, product]);
  }

  // Update an existing product
  updateProduct(id: number, updatedProduct: Product): void {
    const updatedProducts = this.products.value.map((product) =>
      product.id === id ? updatedProduct : product
    );
    this.products.next(updatedProducts);
  }

  // Delete a product
  deleteProduct(id: number): void {
    const updatedProducts = this.products.value.filter(
      (product) => product.id !== id
    );
    this.products.next(updatedProducts);
  }
}

