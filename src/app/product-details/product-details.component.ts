import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
    private productService: InMemoryDataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    this.product = this.productService.getProduct(id); 
  }

  navigateToAddProduct(): void {
    this.router.navigate(['/products']);
  }
}
