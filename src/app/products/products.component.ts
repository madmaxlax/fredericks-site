import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isFetching = true;
  searchQuery = '';
  readonly skeletons = Array.from({ length: 6 });

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.productsService.isFetching$.subscribe(isFetching => this.isFetching = isFetching);
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.isFetching = false;
    });
  }

  clearSearch(input: HTMLInputElement): void {
    this.searchQuery = '';
    input.value = '';
    input.focus();
  }
}
