import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductManagerService } from '../services/product-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products: Product[];

  constructor(private productService: ProductManagerService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
}
