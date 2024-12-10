import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { InMemoryDataService } from '../services/in-memory-data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule,RouterLink],
})
export class ProductListComponent {
  products: { id: number, name: string, available: boolean, description: string }[] = [];

  constructor(private productService: InMemoryDataService, private router: Router) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  editProduct(productId: number): void {
    this.router.navigate(['/edit-product', productId]);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.loadProducts(); 
  }
}