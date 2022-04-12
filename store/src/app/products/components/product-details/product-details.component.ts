import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id: number;
  product: Product;
  productSub: Subscription;
  constructor(private activeRoter: ActivatedRoute, private productSrv: ProductService) { }

  ngOnInit(): void {
    this.activeRoter.params.subscribe(param => {
      this.id = param['id']; 
      this.productSub = this.productSrv.getProductById(this.id).subscribe((product: any) => {
        this.product = product;
      });
    })
  }

  ngOnDestroy(): void {
    if(this.productSub) this.productSub.unsubscribe();
  }

}
