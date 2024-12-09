// import { Component, OnInit } from '@angular/core';
// import { ProductService, Product } from '../product.service';
// import { CommonModule } from '@angular/common';
// import { HighlightDirective } from '../highlight.directive';
// import { RouterModule } from '@angular/router';
// import { InMemoryDataService } from '../services/in-memory-data.service';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [CommonModule, HighlightDirective, RouterModule],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: InMemoryDataService) {}

//   ngOnInit(): void {
//     this.productService.getProducts().subscribe(products => this.products = products);
//   }
// }


// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../services/in-memory-data.service'; // Ensure correct import
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive'; // Assuming this directive is defined
import { RouterModule } from '@angular/router';
import { Product } from '../product.service'; // Ensure Product interface is imported

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HighlightDirective, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: InMemoryDataService) {} // Use InMemoryDataService here

  ngOnInit(): void {
    this.products = this.productService.createDb().products; // Directly access products
  }
}
