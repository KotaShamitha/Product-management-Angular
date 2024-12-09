import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: { id: number, name: string, available: boolean, description: string } = { id: 0, name: '', available: true, description: '' };

  constructor(
    private productService: InMemoryDataService, // Service to manage the products
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // Get the ID from the route
    if (id) {
      // Prepopulate the form with product details
      this.product = this.productService.getProduct(id);
    }
  }

  saveProduct(): void {
    if (this.product.id) {
      // Update the existing product
      this.productService.updateProduct(this.product.id, this.product);
    } else {
      // Add a new product
      this.productService.addProduct(this.product);
    }
    this.router.navigate(['/products']); // Navigate back to the product list
  }

  // Optional: Delete functionality
  onDelete(): void {
    if (this.product.id) {
      this.productService.deleteProduct(this.product.id);
      this.router.navigate(['/products']);
    }
  }
}
