import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const products: Product[] = [
      { id: 1, name: 'Product 1', available: true },
      { id: 2, name: 'Product 2', available: false },
      { id: 3, name: 'Product 3', available: true },
    ];
    return { products };
  }
}
