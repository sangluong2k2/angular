import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList!: IProduct[];

  constructor(private productServices: ProductService) {
    this.productList = this.productServices.getProducts();
   }

  ngOnInit(): void {
  }

  
}
