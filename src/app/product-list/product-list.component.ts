import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { InMemoryDataService } from '../services/in-memory-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [CommonModule,RouterLink],
})
export class ProductListComponent {
  products: { id: number, name: string, available: boolean, description: string }[] = [];

  constructor(private productService: InMemoryDataService, private router: Router) {
    // Initially load the products from the service
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  editProduct(productId: number): void {
    // Navigate to the edit form with the product ID
    this.router.navigate(['/edit-product', productId]);
  }

  deleteProduct(productId: number): void {
    // Remove the product with the given ID from the local array
    this.productService.deleteProduct(productId);
    this.loadProducts();  // Refresh the product list after deletion
  }
}