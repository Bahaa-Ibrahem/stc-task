import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  productsSub: Subscription;
  products: Product[] = [];
  constructor(private productSrv: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsSub = this.productSrv.getProducts().subscribe((products: any) => {
      this.products = products;
      console.log(this.products)
    })
  }

  ngOnDestroy(): void {
    if(this.productsSub) this.productsSub.unsubscribe();
  }

}