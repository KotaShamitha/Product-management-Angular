import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private productService: InMemoryDataService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; 
    if (id) {
      this.product = this.productService.getProduct(id);
    }
  }

  saveProduct(): void {
    if (this.product.id) {
      // Update the existing product
      this.productService.updateProduct(this.product.id, this.product);
    } else {
      this.productService.addProduct(this.product);
    }
    this.router.navigate(['/products']); 
  }

  onDelete(): void {
    if (this.product.id) {
      this.productService.deleteProduct(this.product.id);
      this.router.navigate(['/products']);
    }
  }
}
