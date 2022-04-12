import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private productSrv: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    if(this.productForm.valid) {
      this.productSrv.addProduct(this.productForm.value).subscribe((data) => {
        console.log(data)
      })
    }
  }

}
