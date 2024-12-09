import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { ProductService, Product } from '../product.service';
import { CommonModule } from '@angular/common';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: { id: number, name: string, available: boolean, description: string } = { id: 0, name: '', available: true, description: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: InMemoryDataService // Using the service for product data
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the product ID from the route
    this.product = this.productService.getProduct(id); // Fetch the product details using the service
  }

  navigateToAddProduct(): void {
    this.router.navigate(['/products']);
  }
}
